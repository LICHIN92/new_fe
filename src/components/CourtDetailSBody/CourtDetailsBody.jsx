import React from 'react'
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

function CourtDetailsBody() {
    const [opentimeslot, setTimeslot] = useState(false)
    const [DateRangestate, setDateRangestate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const [calenderOpen, setCalenderOpen] = useState(false)
    const [opendd,setOpendd]=useState(false)
    const closeListfn=(e)=>{
        e.stopPropagation()
        setOpendd(false)
    }
    return (
        <div className='details-page'>
            <div className='details-image-box'>
                <img className='details-main-img' src={img} alt="" />
                <div className='details-image-content d-flex justify-content-between p-4'>
                    <div className="d-flex flex-column justify-content-center text-white">
                        <h3>court name</h3>
                        <p>location</p>
                    </div>
                    <div className='align-self-end d-flex gap-3'>
                        <button >book</button>
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
                value={"jhjbbk"}
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
                            <div className='timeslot-date flex-grow-1 border border-1 rounded-1 p-2'>Date</div>
                            <img src={forword_icon} alt="" height={'20px'} />
                            <div className='timeslot-date flex-grow-1 border border-1 rounded-1 p-2'>Date</div>
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
                                    <button className='common-button'>Select</button>
                                </div>
                            </div>)}
                        <div className='mt-2'>
                            <Custominput name={'cost'} label={'Cost'} value={''} />
                        </div>
                        <div className='range-label position-relative mt-3' onClick={()=>setOpendd(true)}>
                            Select Slots
                          { opendd && <ul className='slot-list'>
                                <li onClick={closeListfn}>nbjbj</li>
                                <li>nbjbj</li>
                                <li>nbjbj</li>
                                <li>nbjbj</li>
                                <li>nbjbj</li>
                            </ul>}
                        </div>
                        <div className=' d-flex justify-content-end mt-3 gap-3 py-2'>
                            <button className='common-button bg-black text-white'>Cancel</button>
                            <button className='common-button'>Create</button>
                        </div>
                    </div>
                </Modal>)}
        </div>
    )
}

export default CourtDetailsBody

