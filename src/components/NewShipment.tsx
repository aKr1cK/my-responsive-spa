import { useForm } from 'react-hook-form';
import { Row, Col, Form, Button, CardHeader, Card, CardBody } from 'react-bootstrap';
import { ToastMsgType, useGlobalContext } from '../context/GlobalProvider';
import { useEffect } from 'react';
import { addShipment, editShipment } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const NewShipment = ({ theme, selectedShipment ,onSubmitChanges,onCancelNewShipment }: any) => {
    const { showToastMsg, setLoading } = useGlobalContext();
    const dispatch = useDispatch();
    let def = {
        shipmentId:"0",
        fileNo: "",
        mblNo: "",
        quotationNo: "",
        consignee: "",
        postDate: "",
        office: "",
        customer: "",
        trucker: "",
        vesselFlightNo: "",
        customerRefNo: "",
        billTo: "",
        type: "Trucker",
        shipType: "",
        carrierBkgNo: "",
        shipper: "",
        sales: "",
        portOfLoading: "",
        portOfDischarge: "",
        finalDestination: "",
        etd: "",
        finalEta: "",
        eta: "",
        emptyPickup: "",
        freightPickup: "",
        deliveryTo: "",
        emptyReturn: "",
        packageType: "",
        packageWeight: 0,
        measurement: "",
        delivered: false,
        estimatedDeliveryDate: "",
        isMyShipment: true
    };

    const { register,reset,getValues, handleSubmit, formState: { errors } } = useForm({
        defaultValues: def
    });

    useEffect(()=>{
        if(selectedShipment?.shipmentId){
            reset({...selectedShipment})
        }
    },[]);
    
    const options = {
        offices: ['CHI', 'NYC', 'LAX', 'MIA', 'HOU'],
        customers: ['APPLE', 'SAMSUNG', 'MICROSOFT', 'DELL', 'HP', 'LENOVO', 'ASUS', 'ACER', 'TOSHIBA', 'LG', 'SONY', 'PANASONIC', 'INTEL', 'AMD', 'NVIDIA', 'QUALCOMM', 'WESTERN DIGITAL', 'SEAGATE', 'CISCO', 'JUNIPER', 'XIAOMI', 'HUAWEI', 'OPPO', 'VIVO', 'REALME', 'TCL', 'MOTOROLA', 'ONEPLUS', 'ZTE', 'BLACKBERRY'],
        deliveredTo:['Chicago Warehouse', 'Seattle Distribution Center', 'Bay Area Facility', 'LA Distribution Hub', 'Tacoma Warehouse', 'Portland Facility', 'SF Tech Center', 'Seattle Tech Hub', 'LA Tech Center', 'Oakland Distribution', 'Long Beach Hub', 'Tacoma Port Facility', 'Seattle Tech Center', 'LA Distribution', 'Oakland Tech Hub', 'Portland Center', 'Tacoma Facility', 'Long Beach Center', 'Seattle Hub', 'Oakland Facility', 'LA Tech Park', 'Seattle Complex', 'Tacoma Center', 'Portland Hub', 'Long Beach Terminal', 'Oakland Complex', 'Seattle Distribution', 'Tacoma Logistics', 'Portland Terminal'],
        truckers: ['NELSON', 'MARTINEZ', 'WILSON', 'ANDERSON', 'THOMPSON', 'GARCIA', 'RODRIGUEZ', 'BROWN', 'DAVIS', 'TAYLOR', 'HARRIS', 'CLARK', 'LEWIS', 'ROBINSON', 'WHITE', 'MOORE', 'JACKSON', 'MARTIN', 'THOMAS'],
        shipTypes: ['Ocean', 'Air', 'Rail', 'Road'],
        shippers: ['TECH EXPORTS INC', 'SAMSUNG ELECTRONICS', 'MS MANUFACTURING', 'DELL ASIA', 'HP SINGAPORE', 'LENOVO CHINA', 'ASUS TAIWAN', 'ACER ELECTRONICS', 'TOSHIBA JAPAN', 'LG ELECTRONICS', 'SONY CORPORATION', 'PANASONIC JAPAN', 'INTEL ASIA', 'AMD MALAYSIA', 'NVIDIA TAIWAN', 'QUALCOMM CHINA', 'WD THAILAND', 'SEAGATE SINGAPORE', 'CISCO CHINA', 'JUNIPER MALAYSIA', 'XIAOMI ELECTRONICS', 'HUAWEI TECH', 'OPPO MOBILE', 'VIVO TECH', 'REALME MOBILE', 'TCL ELECTRONICS', 'MOTOROLA MOBILITY', 'ONEPLUS TECH', 'ZTE CORPORATION', 'BLACKBERRY LIMITED'],
        sales: ['John Smith', 'Mary Johnson', 'Robert Davis', 'Patricia Brown', 'Michael Wilson', 'Sarah Lee', 'David Chen', 'Jennifer Wong', 'Kevin Park', 'Emily Kim', 'Thomas Yang', 'Richard Lee', 'Nancy Chen', 'Andrew Zhang', 'Michelle Wang', 'Steven Liu', 'Laura Kim', 'Daniel Tan', 'Rachel Wong', 'Eric Chen', 'Helen Zhang', 'Jason Li', 'Linda Wang', 'Mark Chen', 'Amy Liu', 'Peter Chang', 'Karen Wu', 'Tony Zhang', 'Alice Wang', 'Chris Lee'],
        packageTypes: ['CARTONS', 'PALLET', 'CONTAINER', 'BOX', 'CASE'],
        emptyPickupList: [''],
        freightPickupList: [''],
        emptyReturnList: [''],
        types: ['Trucker', 'Carrier', 'Agent'],
        ports: ['Los Angeles', 'Seattle', 'Oakland', 'Long Beach', 'Tacoma', 'Portland', 'San Francisco'],
        portOfLoading: ['Shanghai', 'Busan', 'Tokyo', 'Hong Kong', 'Singapore', 'Shenzhen', 'Taipei', 'Kaohsiung', 'Yokohama', 'Incheon', 'Osaka', 'Kobe', 'Ningbo', 'Port Klang', 'Keelung', 'Xiamen', 'Laem Chabang', 'Qingdao', 'Penang', 'Guangzhou', 'Tianjin', 'Vancouver'],
        portOfDischarge:['Los Angeles', 'Seattle', 'Oakland', 'Long Beach', 'Tacoma', 'Portland', 'San Francisco']
    };

    const onSubmit = (data: any) => {
        setLoading(true);
        if(data.shipmentId == '0'){
            dispatch(addShipment(data));
            showToastMsg(ToastMsgType.SUCCESS, "New Shipment Created !!");
        }else{
            dispatch(editShipment(data));
            showToastMsg(ToastMsgType.SUCCESS, "Shipment Saved Successfully !!");
        }
        setTimeout(()=>{onSubmitChanges();setLoading(false);},3000);
    };

    return (
        // <Container>
        <>
            <Card data-bs-theme={theme}>
                <CardHeader className='text-center'>
                    <h4>{getValues("shipmentId") == '0'?'New':'Edit'}&nbsp;Shipment</h4>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="fileNo">
                                    <Form.Label>File No.</Form.Label>
                                    <Form.Control type="text" {...register('fileNo', { required: true })} />
                                    {errors.fileNo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="mblNo">
                                    <Form.Label>MB/L No.</Form.Label>
                                    <Form.Control type="text" {...register('mblNo', { required: true })} />
                                    {errors.mblNo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="quotationNo">
                                    <Form.Label>Quotation No.</Form.Label>
                                    <Form.Control type="text" {...register('quotationNo', { required: true })} />
                                    {errors.quotationNo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="consignee">
                                    <Form.Label>Consignee</Form.Label>
                                    <Form.Control type="text" {...register('consignee', { required: true })} />
                                    {errors.consignee && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="postDate">
                                    <Form.Label>Post Date</Form.Label>
                                    <Form.Control type="date" {...register('postDate', { required: true })} />
                                    {errors.postDate && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="office">
                                    <Form.Label>Office</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('office', { required: true })}>
                                        {options.offices.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.office && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="customer">
                                    <Form.Label>Customer</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('customer', { required: true })}>
                                        {options.customers.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.customer && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="trucker">
                                    <Form.Label>Trucker</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('trucker', { required: true })}>
                                        {options.truckers.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.trucker && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="vesselFlightNo">
                                    <Form.Label>Vessel/Flight No.</Form.Label>
                                    <Form.Control type="text" {...register('vesselFlightNo', { required: true })} />
                                    {errors.vesselFlightNo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="customerRefNo">
                                    <Form.Label>Customer Ref No.</Form.Label>
                                    <Form.Control type="text" {...register('customerRefNo', { required: true })} />
                                    {errors.customerRefNo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="billTo">
                                    <Form.Label>Bill To</Form.Label>
                                    <Form.Control type="text" {...register('billTo', { required: true })} />
                                    {errors.billTo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="type">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control disabled type="text" {...register('type', { required: true })} />
                                    {errors.type && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="shipType">
                                    <Form.Label>Ship Type</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('shipType', { required: true })}>
                                        {options.shipTypes.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.shipType && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="carrierBkgNo">
                                    <Form.Label>Carrier Bkg No.</Form.Label>
                                    <Form.Control type="text" {...register('carrierBkgNo', { required: true })} />
                                    {errors.carrierBkgNo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="shipper">
                                    <Form.Label>Shipper</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('shipper', { required: true })}>
                                        {options.shippers.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.shipper && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="sales">
                                    <Form.Label>Sales</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('sales', { required: true })}>
                                        {options.sales.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.sales && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="portOfLoading">
                                    <Form.Label>Port of Loading</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('portOfLoading', { required: true })}>
                                        {options.portOfLoading.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.portOfLoading && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="portOfDischarge">
                                    <Form.Label>Port of Discharge</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('portOfDischarge', { required: true })}>
                                        {options.portOfDischarge.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.portOfDischarge && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="finalDestination">
                                    <Form.Label>Final Destination</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('finalDestination', { required: true })}>
                                        {options.portOfDischarge.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.finalDestination && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="freightPickup">
                                    <Form.Label>Freight Pickup</Form.Label>
                                    <Form.Control type="date" {...register('freightPickup', { required: true })} />
                                    {errors.freightPickup && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="etd">
                                    <Form.Label>ETD</Form.Label>
                                    <Form.Control type="date" {...register('etd', { required: true })} />
                                    {errors.etd && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="finalEta">
                                    <Form.Label>Final ETA</Form.Label>
                                    <Form.Control type="date" {...register('finalEta', { required: true })} />
                                    {errors.finalEta && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="eta">
                                    <Form.Label>ETA</Form.Label>
                                    <Form.Control type="date" {...register('eta', { required: true })} />
                                    {errors.eta && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="emptyPickup">
                                    <Form.Label>Empty Pickup</Form.Label>
                                    <Form.Control type="date" {...register('emptyPickup', { required: true })} />
                                    {errors.emptyPickup && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="deliveryTo">
                                    <Form.Label>Delivery To</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('deliveryTo', { required: true })}>
                                        {options.deliveredTo.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.deliveryTo && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="emptyReturn">
                                    <Form.Label>Empty Return</Form.Label>
                                    <Form.Control type="date" {...register('emptyReturn', { required: true })} />
                                    {errors.emptyReturn && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="packageType">
                                    <Form.Label>Package Type</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('packageType', { required: true })}>
                                        {options.packageTypes.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.packageType && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="packageWeight">
                                    <Form.Label>Package Weight</Form.Label>
                                    <Form.Control type="number" {...register('packageWeight', { required: true })} />
                                    {errors.packageWeight && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="measurement">
                                    <Form.Label>Measurement</Form.Label>
                                    <Form.Control type="text" {...register('measurement', { required: true })} />
                                    {errors.measurement && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="delivered">
                                    <Form.Label>Delivered</Form.Label>
                                    <Form.Check type="checkbox" {...register('delivered')} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="estimatedDeliveryDate">
                                    <Form.Label>Estimated Delivery Date</Form.Label>
                                    <Form.Control type="date" {...register('estimatedDeliveryDate', { required: true })} />
                                    {errors.estimatedDeliveryDate && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} lg={6} className='mt-3'>
                                <Button className='w-100 mt-5' variant="primary" type="submit">Submit</Button>
                            </Col>
                            <Col md={6} lg={6} className='mt-3'>
                                <Button className='w-100 mt-5' onClick={onCancelNewShipment} variant="danger">Cancel</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        {/* </Container> */}
        </>
    );
};

export default NewShipment;