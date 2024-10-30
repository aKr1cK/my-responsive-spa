import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button, CardHeader, Card, CardBody } from 'react-bootstrap';
import { ToastMsgType, useGlobalContext } from '../context/GlobalProvider';

const NewShipment = ({ theme }: any) => {
    const { showToastMsg, setLoading } = useGlobalContext();
    const options = {
        offices: ['CHI', 'NYC', 'LAX', 'MIA', 'HOU'],
        customers: ['APPLE', 'SAMSUNG', 'MICROSOFT', 'DELL', 'HP', 'LENOVO', 'ASUS', 'ACER', 'TOSHIBA', 'LG', 'SONY', 'PANASONIC', 'INTEL', 'AMD', 'NVIDIA', 'QUALCOMM', 'WESTERN DIGITAL', 'SEAGATE', 'CISCO', 'JUNIPER', 'XIAOMI', 'HUAWEI', 'OPPO', 'VIVO', 'REALME', 'TCL', 'MOTOROLA', 'ONEPLUS', 'ZTE', 'BLACKBERRY'],
        deliveredTo:['Chicago Warehouse', 'Seattle Distribution Center', 'Bay Area Facility', 'LA Distribution Hub', 'Tacoma Warehouse', 'Portland Facility', 'SF Tech Center', 'Seattle Tech Hub', 'LA Tech Center', 'Oakland Distribution', 'Long Beach Hub', 'Tacoma Port Facility', 'Seattle Tech Center', 'LA Distribution', 'Oakland Tech Hub', 'Portland Center', 'Tacoma Facility', 'Long Beach Center', 'Seattle Hub', 'Oakland Facility', 'LA Tech Park', 'Seattle Complex', 'Tacoma Center', 'Portland Hub', 'Long Beach Terminal', 'Oakland Complex', 'Seattle Distribution', 'Tacoma Logistics', 'Portland Terminal'],
        truckers: ['NELSON', 'MARTINEZ', 'WILSON', 'ANDERSON', 'THOMPSON', 'GARCIA', 'RODRIGUEZ', 'BROWN', 'DAVIS', 'TAYLOR', 'HARRIS', 'CLARK', 'LEWIS', 'ROBINSON', 'WHITE', 'MOORE', 'JACKSON', 'MARTIN', 'THOMAS'],
        shipTypes: ['Ocean', 'Air', 'Rail', 'Road'],
        shippers: ['ADAMS AND SONS', 'GLOBAL TECH LIMITED', 'DIGITAL SOLUTIONS CO', 'INNOVATIVE IMPORTS LLC', 'TECH DISTRIBUTORS INC', 'GLOBAL ELECTRONICS CORP', 'SMART TECH SOLUTIONS', 'FUTURE TECH IMPORTS', 'DIGITAL IMPORTS CO', 'PACIFIC TECH TRADERS', 'QUANTUM ELECTRONICS LTD', 'MATRIX IMPORTS INC', 'NEXTGEN SOLUTIONS', 'DIGITAL DYNAMICS LLC', 'TECH WAVE INDUSTRIES', 'SILICON TRADERS CO', 'GLOBAL CHIP SOLUTIONS', 'CIRCUIT CITY IMPORTS', 'TECH SPHERE LIMITED', 'DIGITAL NEXUS CORP', 'SMART COMPONENTS INC', 'TECH INNOVATIONS GROUP', 'GLOBAL TECH SYSTEMS', 'DIGITAL WORLD CORP', 'FUTURE ELECTRONICS LTD', 'PRIME TECH SOLUTIONS', 'ADVANCED SYSTEMS CO', 'ELITE TECH IMPORTS', 'TECH PIONEER GROUP', 'SMART TECH IMPORTERS'],
        sales: ['John Smith', 'Mary Johnson', 'Robert Davis', 'Patricia Brown', 'Michael Wilson', 'Sarah Lee', 'David Chen', 'Jennifer Wong', 'Kevin Park', 'Emily Kim', 'Thomas Yang', 'Richard Lee', 'Nancy Chen', 'Andrew Zhang', 'Michelle Wang', 'Steven Liu', 'Laura Kim', 'Daniel Tan', 'Rachel Wong', 'Eric Chen', 'Helen Zhang', 'Jason Li', 'Linda Wang', 'Mark Chen', 'Amy Liu', 'Peter Chang', 'Karen Wu', 'Tony Zhang', 'Alice Wang', 'Chris Lee'],
        packageTypes: ['CARTONS', 'PALLET', 'CONTAINER', 'BOX', 'CASE'],
        emptyPickupList: [''],
        freightPickupList: [''],
        emptyReturnList: [''],
        types: ['Trucker', 'Carrier', 'Agent'],
        ports: ['Los Angeles', 'Seattle', 'Oakland', 'Long Beach', 'Tacoma', 'Portland', 'San Francisco']
    };
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fileNo: "56467",
            mblNo: "674344",
            quotationNo: "345345",
            consignee: "ADAMS AND SONS",
            postDate: "2021-05-17",
            office: "CHI",
            customer: "APPLE",
            trucker: "NELSON",
            vesselFlightNo: "546456",
            customerRefNo: "546456",
            billTo: "HCT",
            type: "Trucker",
            shipType: "Ocean",
            carrierBkgNo: "CBK789012",
            shipper: "ADAMS AND SONS",
            sales: "John Smith",
            portOfLoading: "Shanghai",
            portOfDischarge: "Los Angeles",
            finalDestination: "Los Angeles",
            etd: "2021-05-20",
            finalEta: "2021-06-10",
            eta: "2021-06-08",
            emptyPickup: "2021-05-15",
            freightPickup: "2021-05-16",
            deliveryTo: "Chicago Warehouse",
            emptyReturn: "2021-06-15",
            packageType: "CARTONS",
            packageWeight: 10,
            measurement: "12x10x8",
            delivered: false,
            estimatedDeliveryDate: "2021-06-12"
        }
    });

    const onSubmit = (data: any) => {
        setLoading(true);
        showToastMsg(ToastMsgType.SUCCESS, "New Shipment Created !!");
        setTimeout(()=>setLoading(false),3000);
        console.log(data);
    };

    return (
        <Container>
            <Card data-bs-theme={theme}>
                <CardHeader className='text-center'>
                    <h4>New Shipment</h4>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="fileNo">
                                    <Form.Label>File No.</Form.Label>
                                    <Form.Control type="text" {...register('fileNo', { required: true })} />
                                    {errors.fileNo && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="mblNo">
                                    <Form.Label>MB/L No.</Form.Label>
                                    <Form.Control type="text" {...register('mblNo', { required: true })} />
                                    {errors.mblNo && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="quotationNo">
                                    <Form.Label>Quotation No.</Form.Label>
                                    <Form.Control type="text" {...register('quotationNo', { required: true })} />
                                    {errors.quotationNo && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="consignee">
                                    <Form.Label>Consignee</Form.Label>
                                    <Form.Control type="text" {...register('consignee', { required: true })} />
                                    {errors.consignee && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="postDate">
                                    <Form.Label>Post Date</Form.Label>
                                    <Form.Control type="date" {...register('postDate', { required: true })} />
                                    {errors.postDate && <span>This field is required</span>}
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
                                    {errors.office && <span>This field is required</span>}
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
                                    {errors.customer && <span>This field is required</span>}
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
                                    {errors.trucker && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="vesselFlightNo">
                                    <Form.Label>Vessel/Flight No.</Form.Label>
                                    <Form.Control type="text" {...register('vesselFlightNo', { required: true })} />
                                    {errors.vesselFlightNo && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="customerRefNo">
                                    <Form.Label>Customer Ref No.</Form.Label>
                                    <Form.Control type="text" {...register('customerRefNo', { required: true })} />
                                    {errors.customerRefNo && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="billTo">
                                    <Form.Label>Bill To</Form.Label>
                                    <Form.Control type="text" {...register('billTo', { required: true })} />
                                    {errors.billTo && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="type">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control disabled type="text" {...register('type', { required: true })} />
                                    {errors.type && <span>This field is required</span>}
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
                                    {errors.shipType && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="carrierBkgNo">
                                    <Form.Label>Carrier Bkg No.</Form.Label>
                                    <Form.Control type="text" {...register('carrierBkgNo', { required: true })} />
                                    {errors.carrierBkgNo && <span>This field is required</span>}
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
                                    {errors.shipper && <span>This field is required</span>}
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
                                    {errors.sales && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="portOfLoading">
                                    <Form.Label>Port of Loading</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('portOfLoading', { required: true })}>
                                        {options.ports.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.portOfLoading && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="portOfDischarge">
                                    <Form.Label>Port of Discharge</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('portOfDischarge', { required: true })}>
                                        {options.ports.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.portOfDischarge && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="finalDestination">
                                    <Form.Label>Final Destination</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('finalDestination', { required: true })}>
                                        {options.ports.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.finalDestination && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="freightPickup">
                                    <Form.Label>Freight Pickup</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('freightPickup', { required: true })}>
                                        {options.freightPickupList.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.freightPickup && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="etd">
                                    <Form.Label>ETD</Form.Label>
                                    <Form.Control type="date" {...register('etd', { required: true })} />
                                    {errors.etd && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="finalEta">
                                    <Form.Label>Final ETA</Form.Label>
                                    <Form.Control type="date" {...register('finalEta', { required: true })} />
                                    {errors.finalEta && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="eta">
                                    <Form.Label>ETA</Form.Label>
                                    <Form.Control type="date" {...register('eta', { required: true })} />
                                    {errors.eta && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="emptyPickup">
                                    <Form.Label>Empty Pickup</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('emptyPickup', { required: true })}>
                                        {options.emptyPickupList.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.emptyPickup && <span>This field is required</span>}
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
                                    {errors.deliveryTo && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="emptyReturn">
                                    <Form.Label>Empty Return</Form.Label>
                                    <Form.Control as="select" className="form-select" {...register('emptyReturn', { required: true })}>
                                        {options.emptyReturnList.map((option: any) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.emptyReturn && <span>This field is required</span>}
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
                                    {errors.packageType && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="packageWeight">
                                    <Form.Label>Package Weight</Form.Label>
                                    <Form.Control type="number" {...register('packageWeight', { required: true })} />
                                    {errors.packageWeight && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className='mt-3'>
                                <Form.Group controlId="measurement">
                                    <Form.Label>Measurement</Form.Label>
                                    <Form.Control type="text" {...register('measurement', { required: true })} />
                                    {errors.measurement && <span>This field is required</span>}
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
                                    {errors.estimatedDeliveryDate && <span>This field is required</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} lg={6} className='mt-3'>
                                <Button className='w-100 mt-5' variant="primary" type="submit">Submit</Button>
                            </Col>
                            <Col md={6} lg={6} className='mt-3'>
                                <Button className='w-100 mt-5' onClick={onSubmit} variant="danger">Cancel</Button>
                            </Col>
                        </Row>
                        
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default NewShipment;