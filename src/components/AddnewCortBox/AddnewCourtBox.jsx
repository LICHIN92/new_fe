import React, { useRef, useState } from 'react'
import Custominput from '../Common/Custom/Custominput'
import addicon from '@Assets/addicon.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AxiosInstance from '../../config/apicall';
import { ErrorToast, successToast } from '../../Plugins/Toast/Toast';
import { useNavigate } from 'react-router-dom';

function AddnewCourtBox() {
    const [Courtdata, setCourtdata] = useState({})
    const fileInputRef = useRef()
    const [selelctedFiles, setSelectedFiles] = useState([])
    const navigate = useNavigate()
    const handlechange = (e) => {
        setCourtdata({ ...Courtdata, [e.target.name]: e.target.value })
    }

    const handleInputFileChange = (e) => {
        const files = Array.from(e.target.files);
        const validFiles = files.filter((file) => {
            return file.type.startsWith("image/") || file.type.startsWith("video/");
        });

        setSelectedFiles((prevState) => [...prevState, ...validFiles]);
    }

    const handleAddIconClick = () => {
        fileInputRef.current.click()
    }
    const handleDescriptionChange = (data) => {
        setCourtdata({ ...Courtdata, description: data })
    }
    const handleAddNewCourt = () => {
        console.log(Courtdata);
        let { name, location, type, addressline1, addressline2, addressline3, landmark, pin, contactNumber } = Courtdata
        let lettervalid = /^[a-z.0-9 ]+$/i;
        let pincodevalid=/^[0-9]{6}$/;
        let mobile=/^[0-9]{10}$/
        function namevalid() {
            if (name) {
                if (lettervalid.test(name)) {
                    return true
                }
            }
            alert("please fill the name field")
        }
        function typevalid() {
            if (type) {
                if (lettervalid.test(type)) {
                    return true
                }
            }
            alert("please fill the type field")
        }
        function locationvalid(){
            if(location){
                if (lettervalid.test(location)) {
                    return true
                }
            }
            alert("please fill the location field")

        }
        function addressline1valid() {
            if (addressline1) {
                if (lettervalid.test(addressline1)) {
                    return true
                }
            } alert("please fill addressline1")
        }
        function addressline2valid() {
            if (addressline2) {
                if (lettervalid.test(addressline2)) {
                    return true
                }
            } alert("please fill addressline2")
        }
        function addressline3valid() {
            if (addressline3) {
                if (lettervalid.test(addressline3)) {
                    return true
                }
            } alert("please fill addressline3")
        }
      function landmarkvalid(){
        if(landmark){
            if (landmark) {
                if (lettervalid.test(landmark)) {
                    return true
                }
            } alert("please fill landmark") 
        }
      }
      function pinvalid(){
        if(pin){
            if (landmark) {
                if (pincodevalid.test(pin)) {
                    return true
                }
                alert('please enter a proper pin code')
            } alert("please fill pin") 
        }
      }
      function mobilevalid(){
        console.log(contactNumber);
        if(contactNumber){
            if(contactNumber.length==10){
                return true
            }
        alert('please enter a proper Contact Number')

        }else{
        alert('please enter a  Contact Number')

        }
      }
        if (namevalid() && typevalid() && locationvalid() && addressline1valid && addressline2valid() && addressline3valid() && landmarkvalid() && pinvalid() && mobilevalid()) {
            const formDatatoSend = new FormData();
            selelctedFiles.forEach((file) => {
                formDatatoSend.append('files', file)
            })
            Object.entries(Courtdata).forEach(([key, value]) => {
                formDatatoSend.append(key, value)
            })
            AxiosInstance({
                url: 'http://localhost:5000/admin/createnewcourt',
                // url: "/admin/createnewcourt",
                method: "post",
                data: formDatatoSend,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                successToast(res.data.message)
                navigate('/home')

            }).catch(err => {
                ErrorToast('somethig went wrong')
            })
        } else {
            ErrorToast('plase fill the field')
        }

    }
    return (
        <div className=' container-fluid'>
            <div className='row'>
                <div className=' d-flex justify-content-between mt-2'>
                    <h3>Add New Court</h3>
                    <span className='d-flex gap-3'>
                        <button className='common-button' >Cancel</button>
                        <button className='common-button' onClick={handleAddNewCourt}>Create</button>

                    </span>
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'text'} name={'name'} label={'Name'} value={Courtdata.name} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'text'} name={'location'} label={'Location'} value={Courtdata.location} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'text'} name={'type'} label={'Type'} value={Courtdata.type} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'text'} name={'addressline1'} label={'Address Line1'} value={Courtdata.addressline1} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'text'} name={'addressline2'} label={'Address Line2'} value={Courtdata.addressline2} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'text'} name={'addressline3'} label={'Address Line3'} value={Courtdata.addressline3} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'text'} name={'landmark'} label={'Land Mark'} value={Courtdata.landmark} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'number'} name={'pin'} label={'PIN'} value={Courtdata.pin} onchange={handlechange} />
                </div>
                <div className=' col-lg-4 col-md-6 mt-3'>
                    <Custominput type={'number'} name={'contactNumber'} label={'Contact Number'} value={Courtdata.mobile} onchange={handlechange} />
                </div>
                <div className=' mt-2 d-flex flex-wrap gap-3'>
                    {selelctedFiles.map((file, index) => (
                        <>
                            {file.type.startsWith("image/") && (
                                <img src={URL.createObjectURL(file)} alt='' height={150} key={index} />
                            )}
                            {file.type.startsWith("video/") && (
                                <video src={URL.createObjectURL(file)} height={150} key={index} controls />
                            )}
                        </>
                    ))}
                    <div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleInputFileChange}
                            multiple
                            accept="image/*,video/*"
                            style={{ display: 'none' }}
                        />

                    </div>
                    <img src={addicon} alt="" style={{ cursor: 'pointer' }} onClick={handleAddIconClick} />
                </div>
            </div>
            <ReactQuill className='mt-3' theme="snow" value={Courtdata.description} onChange={handleDescriptionChange} style={{ height: '150px' }} />
            {(!Courtdata.description || Courtdata.description.trim().length === 0) && (
                <div style={{ color: '#aaa', marginTop: '-100px', marginLeft: '10px' }}>
                    Type your description here...
                </div>
            )}
        </div>
    )
}

export default AddnewCourtBox