import React, { useEffect } from 'react'
import './CourtDetailsBody.css'
import img from '@Assets/football-ground.avif'
import edit from '@Assets/edit.svg'
import files from '@Assets/filesicon.svg'
import calender from '@Assets/calender.svg'
import close_icon from '@Assets/closeicon.svg'
import add from '@Assets/add.svg'
import forword_icon from '@Assets/forword.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from '../Common/Modal/Modal'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'
import Custominput from '../Common/Custom/Custominput'
import { useParams } from 'react-router-dom'
import AxiosInstance from '../../config/apicall'
import { TIMINGS } from '../../Constants/constant'
import { ErrorToast, successToast } from '../../Plugins/Toast/Toast'
import { useDispatch } from 'react-redux'
import { showorhideLoader } from '../../redux/GeneralSlice'

function CourtDetailsBody() {
    const { id } = useParams()
    // console.log(id);
    const [opentimeslot, setTimeslot] = useState(false)
    const [DateRangestate, setDateRangestate] = useState({
        // startDate: new Date(),//It will select today's date
        startDate: null,
        endDate: null,
        key: 'selection'
    });
    const [calenderOpen, setCalenderOpen] = useState(false)
    const [opendd, setOpendd] = useState(false)
    const [SingleCourtdata, setCourtData] = useState({})
    const [selectedSlots, setSelectedSlots] = useState([])
    const [fiteredTimings, setfilteredTimings] = useState(TIMINGS) //To avoid selecting the selected time slot again
    const [cost, setCost] = useState('')
    const [bookingModal, setBookingModal] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10)) //yy-mm-dd
    const [slotdata, setSlotsdata] = useState([])
    const [bookedSlots, setBookedSlots] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        getSingleCourtdata()
    }, [])

    useEffect(() => {
        getslotsdata()
        console.log(slotdata);
    }, [selectedDate])

    useEffect(() => {    // useEffect is used to log DateRanges 
        // console.log(DateRangestate);
    }, [DateRangestate]);

    const getslotsdata = () => {
        AxiosInstance({
            url: 'http://localhost:5000/users/getslotsdata',
            method: 'get',
            params: {
                courtId: id,
                date: selectedDate
            }
        }).then(res => {
            // debugger
            console.log('slotdata');
            setSlotsdata(res.data)
            console.log(res);
        }).catch(err => {
            console.log('error');
            console.log(err);
            ErrorToast('something went wrong getslotdata')
        })
    }

    const getSingleCourtdata = () => {
        // AxiosInstance.get('/users/getsinglecourtdata',{params:{courtId:id}})
        AxiosInstance({
            url: 'http://localhost:5000/users/getsinglecourtdata',
            method: 'get',
            params: { courtId: id } // Correctly pass courtId as a query parameter
        }).then((resp) => {
            setCourtData(resp.data[0])
            // console.log(resp.data);
        }).catch((error) => {
            console.log(error);
            console.error('Error fetching single court data:', error);
        });
    };

    const selectSlot = (e, slot) => {
        e.stopPropagation()
        setSelectedSlots([...selectedSlots, slot])
        setOpendd(false)
        const newfilter = fiteredTimings.filter((time) => time.id !== slot.id)
        setfilteredTimings(newfilter)
    }

    const createCourtShedules = () => {
        dispatch(showorhideLoader(true))
        AxiosInstance({
            url: 'http://localhost:5000/admin/createshedule',
            method: 'post',
            data: {
                startDate: DateRangestate.startDate,
                endDate: DateRangestate.endDate,
                cost: cost,
                selectedSlots: selectedSlots,
                courtId: id
            }
        })
            .then(res => {
                successToast('court created successfully')
                dispatch(showorhideLoader(false))
                setTimeslot(false)
            }).catch((err) => {
                console.log(err);
                // debugger
                // ErrorToast('court retion failed')
                ErrorToast(err?.response?.data.message)
            })
    }
    const setorDeselectSots = (slot) => {
        if (bookedSlots.find((ele) => ele._id === slot._id)) {
            const temp = bookedSlots.filter((ele) => ele._id !== slot._id)
            setBookedSlots(temp)
            console.log(bookedSlots);
            console.log(slot);
        } else {
            setBookedSlots([...bookedSlots, slot])
        }
    }

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        })
    }
    async function initiateBooking() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            ErrorToast("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const slotIds = bookedSlots.map((ele) => { return ele._id })
        // creating a new order

        const result = await AxiosInstance({
            url: "http://localhost:5000/payments/orders",
            method: 'post',
            data: { courtId: id, slotIds: slotIds }
        });


        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency, receipt } = result.data;

        const options = {
            key: process.env.nREACT_APP_RP_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Green-grid Pvt.Ltd",
            description: "Booking Payment",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = { //these datas are sending to BE when seccess
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    receipt,
                    slotIds,
                    courtId: id,
                    date: selectedDate
                };

                const result = await AxiosInstance({
                    url: "http://localhost:5000/payments/verify",
                    method: 'post',
                    data: data
                });
                setBookingModal(false)
                getslotsdata()
                successToast(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }




    return (
        <div className='details-page'>
            <div className='details-image-box'>
                <img className='details-main-img' src={img} alt="" />
                <div className='details-image-content d-flex justify-content-between p-4'>
                    <div className="d-flex flex-column justify-content-center text-white">
                        <h3>{SingleCourtdata.name}</h3>
                        <p>{SingleCourtdata.location}</p>
                    </div>
                    <div className='align-self-end d-flex gap-3'>
                        <button onClick={() => setBookingModal(true)}>book</button>
                        <button>
                            <img src={edit} alt="" height={'20px'} />
                        </button>
                        <button>
                            <img src={files} alt="" height={'20px'} />
                        </button>
                        <button>
                            <img src={add} alt='' height={'20px'} onClick={() => setTimeslot(true)} />
                        </button>

                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <ReactQuill readOnly={true} theme="bubble"
                className="" style={{ height: '150px' }}
                value={SingleCourtdata.description}
            />
            {opentimeslot && (
                <Modal
                    heading={'Add new time slot data'}
                    closeModal={() => setTimeslot(false)}>
                    <div className='time-slot-select-modal p-3'>
                        <label htmlFor="">Select Date Range
                            <img src={calender} className='mx-2 calender' alt="" height={'20px'} onClick={() => setCalenderOpen(true)} />
                        </label>
                        <div className=' d-flex gap-2 align-items-center mt-3'> {/* for displaying selectedd ate */}
                            <div className='timeslot-date flex-grow-1 border border-1 rounded-1 p-2'>
                                {/* Date */}
                                {new Date(DateRangestate.startDate).toLocaleDateString()}
                            </div>
                            <img src={forword_icon} alt="" height={'20px'} />
                            <div className='timeslot-date flex-grow-1 border border-1 rounded-1 p-2'>
                                {new Date(DateRangestate.endDate).toLocaleDateString()}
                            </div>
                        </div>
                        {calenderOpen && (
                            <div className='calender-box'>
                                <img src={close_icon} alt="" height={'30px'} className='modal-close-icon' onClick={() => setCalenderOpen(false)} />

                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDateRangestate(item.selection)}
                                    moveRangeOnFirstSelection={false}
                                    ranges={[DateRangestate]}
                                />

                                <div className=' d-flex justify-content-end gap-3 mt-2'>
                                    <button className='common-button bg-black text-white'>Cancel</button>
                                    <button className='common-button' onClick={() => setCalenderOpen(false)}>Select</button>
                                </div>
                            </div>)}
                        <div className='mt-2'>
                            <Custominput name={'cost'} label={'Cost'} value={cost} onchange={(e) => setCost(e.target.value)} />
                        </div>
                        <div className='range-label position-relative mt-3' onClick={() => setOpendd(true)}>
                            Select Slots
                            {opendd && <ul className='slot-list'>
                                {/* {TIMINGS.map((slot) => <li onClick={(e) => selectSlot(e, slot)}>{slot.name}</li>)} */}
                                {fiteredTimings.map((slot) => <li onClick={(e) => selectSlot(e, slot)}>{slot.name}</li>)}

                            </ul>}
                        </div>

                        <div className='d-flex flex-wrap gap-2 mt-1 py-2' >
                            {selectedSlots.map(slot => <span className='border border-1 rounded-2 px-2 py-1 '> {slot.name}</span>)}
                        </div>
                        <div className=' d-flex justify-content-end mt-3 gap-3 py-2'>
                            <button className='common-button bg-black text-white'>Cancel</button>
                            <button className='common-button' onClick={createCourtShedules}>Create</button>
                        </div>
                    </div>
                </Modal>)}

            {bookingModal && <Modal
                heading={'Booking slots'}
                closeModal={() => setBookingModal(false)}>
                <div className='p-3  h-100 d-flex flex-column'>
                    <label htmlFor="">Start Date</label>
                    <input type="date" className='p-1 px-2 border rounded'
                        value={selectedDate}
                        min={new Date().toISOString().substr(0, 10)}
                        onChange={(e) => setSelectedDate(e.target.value)} />
                </div>
                <label htmlFor="">Available Slots</label>
                <div className="d-flex flex-wrap gap-2 mt-1">
                    {slotdata.map((slot) =>
                        <span
                            className={`${bookedSlots.find(ele => ele._id === slot._id)
                                    ? "bg-info-subtle"
                                    : slot.slot.bookedBy
                                        ? 'notavailable'
                                        : "availbleslots"
                                } px-2 py-1 mt-2`}
                            onClick={() => !slot.bookedBy && setorDeselectSots(slot)}
                        >
                            {slot.slot.name}

                        </span>
                    )}

                </div>
                <div className=' d-flex justify-content-end gap-3 mt-2 py-2'>
                    <button className='common-button bg-black text-white'>Cancel</button>
                    <button className='common-button me-3' onClick={initiateBooking}>Book</button>
                </div>
            </Modal>}
        </div>
    )
}

export default CourtDetailsBody

