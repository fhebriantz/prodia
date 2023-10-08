import React, { useState,useEffect  } from 'react';
import Authenticated from '@/Layouts/Authenticated';

import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react';
import { Card, Col, Input, Row, Upload, Select, Image, Button} from 'antd';

import axios from 'axios';
export default function Welcome(props) {
    const {title,url} = props
    const [model, setModel] = useState('dreamshaper_8.safetensors [9d40847d]');
    const [prompt, setPrompt] = useState('badass woman,  faint smile, <lora:epi_noiseoffset2:1> <lora:more_details_v10:0.5>');
    const [denoising, setDenoising] = useState(0.9);
    const [time, setTime] = useState(10);
    const {Option} = Select
    const [loadings, setLoadings] = useState(false);
    const [image, setImage] = useState('');
    const [listimage, setListimage] = useState([]);
    const [imageUrl, setImageUrl] = useState('https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg');
   
    const handleInputChange = (event) => {
        setImageUrl(event.target.value);
    };
    const handleModelChange = (value) => {
        setModel(value);
    };
    const handlePromptChange = (event) => {
        setPrompt(event.target.value);
    };
    const handleDenoisingChange = (event) => {
        setDenoising(event.target.value);
    };
    const handleTimeOut = (event) => {
        setTime(event.target.value);
    };
    const handleTruncate = async () => { 
        setLoadings(true)
        axios.get(`${url}/prodia/truncate`)
        .then(({ data }) => {
            setListimage(data)

            setLoadings(false)
            })
    }
    const negative1 = "(worst quality, bad quality:2.0), (bad-hands-5, badhandv4:1.0), (easynegativev2:1.2), (bad-artist-anime, bad-artist, bad_prompt, bad-picture-chill-75v, bad_prompt_version2, bad_quality, bad-picture-chill-75v, bad-image-v2-39000, NG_DeepNegative_V1_4T, DRD_PNTE768:0.8), (deformed iris, deformed pupils, bad eyes, semi-realistic:1.4), (nsfw, cropped, lowres, text, watermark, logo, signature, jpeg artifacts, username, artist name, trademark, title, multiple view, Reference sheet, long neck, logo, tattoos, wires, ear rings, dirty face, monochrome, grayscale:1.2)"
    const negative2 = "(poorly drawn face)++, (dark skin, tan skin)++, (character out of frame)1.3, bad quality, low-res, (monochrome)1.1, (grayscale)1.3, acne, skin blemishes, bad anatomy, text, error, missing fingers, extra limbs, missing limbs, cut off, unrealistic, (asian face)++,  (cropped, lowres, text, watermark, logo, signature, jpeg artifacts, username, artist name, trademark, title, multiple view, Reference sheet, long neck, logo, tattoos)"
    const handleClick = async () => { 
        setLoadings(true)
        try {
        const data = {
            body : `{"model":"${model}","denoising_strength":${denoising},"cfg_scale":6,"steps":30,"sampler":"DPM++ 2M Karras","negative_prompt":"${negative1}","imageUrl":"${imageUrl}","prompt":"${prompt}"}`
        }
        await axios.post(`${url}/prodia/generate`,data)
        .then(({ data }) => {
            setTimeout(function() {
                axios.post(`${url}/prodia/render/${data?.job}`)
                .then(({ data }) => {
                    console.log(data)
                    setImage(data?.imageUrl)
                    
                    setLoadings(false)
                    const databody = {
                        image : data?.imageUrl
                    }
                    axios.post(`${url}/prodia/insert`,databody)
                    .then(({ data }) => {
                        setListimage(data)
                    })
                })
              }, time * 1000);
            
        })
        
        } catch (error) { 
            console.log(error)
            setLoadings(false)
        }
      };
      useEffect(() => {
        axios.get(`${url}/prodia/getImage`)
        .then(({ data }) => {
            setListimage(data)
            })
        }, [])
        console.log(listimage)
    return (
        <div>
            <Head title={title} />
            <div className="py-3">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/dashboard">
                                <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink href={route('imgtoimg')} active={route().current('imgtoimg')}>
                                Image to Image
                            </NavLink>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink href={route('videotoimage')} active={route().current('videotoimage')}>
                                Video to Image
                            </NavLink>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink href={route('continuousimage')} active={route().current('continuousimage')}>
                                Continuous Image
                            </NavLink>
                        </div>
                        
                    </div>
                        <div className='max-full p-2'>
                            <Card showHeader={false} style={{textAlign:'center'}}>
                            <Row>
                                <Col sm={24}>
                                    <p>LoRa Helper</p>
                                    <p style={{fontSize:12}}>{'<lora:age_slider_v20:3> <lora:muscle_slider_v1:2> <lora:weight_slider_v2:3> <lora:zoom_slider_v1:3> <lora:epi_noiseoffset2:1> <lora:eye_size_slider_v1:3> <lora:hair_length_slider_v1:3> <lora:more_details_v10:1> <lora:3DMM_V12:1> <lora:arcane_offset:1> <lora:linevichit3-v10:1>'}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>URL</Col>
                                <Col sm={12}><Input defaultValue={imageUrl} onChange={handleInputChange} /></Col>
                            </Row>
                            <Row>
                                <Col sm={12}>Model</Col>
                                <Col sm={12}>
                                <Select defaultValue={model} onChange={handleModelChange}>
                                    <Option value='absolutereality_v181.safetensors [3d9d4d2b]'>Absolute Reality</Option>
                                    <Option value='anythingV5_PrtRE.safetensors [893e49b9]'>Anything V5</Option>
                                    <Option value='dreamshaper_8.safetensors [9d40847d]'>Dreamshaper 8</Option>
                                    <Option value='Realistic_Vision_V5.0.safetensors [614d1063]'>Realistic Vision</Option>
                                </Select></Col>
                            </Row>
                            <Row>
                                <Col sm={12}>Prompt</Col>
                                <Col sm={12}><Input defaultValue={prompt} onChange={handlePromptChange} /></Col>
                            </Row>
                            <Row>
                                <Col sm={12}>Denoising</Col>
                                <Col sm={12}><Input defaultValue={denoising} onChange={handleDenoisingChange} /></Col>
                            </Row>
                            <Row>
                                <Col sm={12}>Set Time Out (Second)</Col>
                                <Col sm={12}><Input defaultValue={time} onChange={handleTimeOut} /></Col>
                            </Row>
                                
                                <Button  type="primary" onClick={handleClick} loading={loadings}>Click me</Button>
                                <Button  type="primary" onClick={handleTruncate} loading={loadings}>Truncate</Button>
                            </Card>
                        </div>
                        <div className='max-full p-2'>
                            <Row gutter={[8,8]}>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <div className='max-full p-2'>
                                        {image&&<Image
                                            src={image}
                                            fallback="data:image/png;base64,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"
                                        />}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='max-full p-2'>
                            <Row gutter={[8,8]}>
                            {listimage.map((el,i)=>{
                                return (
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <div className='max-full p-2'>
                                        <Image
                                            src={!el.image ? "error" : el.image}
                                            fallback="data:image/png;base64,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"
                                        />
                                    </div>
                                </Col>)
                            })}
                                
                            </Row>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    )
}