import { AgGridReact } from 'ag-grid-react';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { Button, Card, ButtonGroup, Container, Form } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiCopyBold } from 'react-icons/pi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import NewShipment from './NewShipment';
import { ToastMsgType, useGlobalContext } from '../context/GlobalProvider';
import { useSelector } from 'react-redux';

const Truck = ({ theme }: any) => {
    const shipments: any = useSelector((state: any) => state?.auth.shipments)
    const { showToastMsg, setLoading } = useGlobalContext();
    const [activeTab, setActiveTab] = useState('Shipment List');
    const [isManual, setManual] = useState(false);
    const [rowData, setRowData] = useState(shipments);
    const [colDefs/*, setColDefs*/]: any[] = useState([{ "field": "delivered" }, { "field": "fileNo" }, { "field": "mblNo" }, { "field": "quotationNo" }, { "field": "consignee" }, { "field": "postDate" }, { "field": "office" }, { "field": "customer" }, { "field": "trucker" }, { "field": "vesselFlightNo" }, { "field": "customerRefNo" }, { "field": "billTo" }, { "field": "type" }, { "field": "shipType" }, { "field": "carrierBkgNo" }, { "field": "shipper" }, { "field": "sales" }, { "field": "portOfLoading" }, { "field": "portOfDischarge" }, { "field": "etd" }, { "field": "finalEta" }, { "field": "eta" }, { "field": "emptyPickup" }, { "field": "freightPickup" }, { "field": "deliveryTo" }, { "field": "emptyReturn" }, { "field": "packageType" }, { "field": "packageWeight" }, { "field": "measurement" }, { "field": "estimatedDeliveryDate" }]);
    const [selectedShipment, setSelectedShipment] = useState({});

    useEffect(() => {
        if(isManual){
            let filtered = shipments.filter((item: any)=>item.isMyShipment == true);
            setRowData(filtered);
        }else{
            setRowData(shipments);
        }
    }, [shipments, activeTab, isManual])

    const rowSelection: any = useMemo(() => {
        return {
            mode: 'multiRow'
        };
    }, []);

    const onRowDoubleClicked = (e: any) => {
        setSelectedShipment(e.data)
        setActiveTab('Edit Shipment');
    }

    const onCancelNewShipment = () => {
        setActiveTab('Shipment List');
    }

    const onSubmitChanges = () => {
        setRowData(shipments);
        setActiveTab('Shipment List');
    }

    const handleManualToggle = () => {
        setManual((prevChecked) => !prevChecked);
    };

    //ADDED FOR DEMO PURPOSE
    useLayoutEffect(() => {
        setLoading(true);
        showToastMsg(ToastMsgType.SUCCESS, "Data loaded Successfully");
        setTimeout(() => setLoading(false), 3000);
    }, [])

    return (
        <Container className='mb-4'>
            <div className="text-start p-2 darkGreenBg">
                Home&nbsp;&nbsp;<FaGreaterThan />&nbsp;&nbsp;{activeTab}
            </div>
            <Card className={theme == 'dark' ? "bg-dark text-white" : "bg-light"}>
                <Card.Header>
                    <Row>
                        <Col xs={1} lg={1} sm={1}>
                            {activeTab == 'Shipment List' && <ButtonGroup className="me-2" aria-label="First group">
                                <Button onClick={() => setActiveTab('New Shipment')}><IoMdAddCircle size={22} /></Button>
                                <Button><PiCopyBold size={22} /></Button>
                                <Button><RiDeleteBin5Line size={22} /></Button>
                            </ButtonGroup>}
                        </Col>
                        <Col></Col>
                        {(activeTab == 'New Shipment' || activeTab == 'Edit Shipment') && <Col xs={1} lg={1} sm={1}>{<AiOutlineClose className="bg-danger" size={20} onClick={() => setActiveTab('Shipment List')} />}</Col>}
                        {(activeTab == 'Shipment List') && <Col xs={2} lg={2} sm={2}>{<Form.Check type="switch" id="custom-switch" label="My Shipment" checked={isManual} onChange={handleManualToggle} />}</Col>}
                    </Row>
                </Card.Header>
                <Card.Body>
                    {activeTab == 'Shipment List' && <>
                        <div className={theme == "dark" ? "ag-theme-alpine-dark pt-2" : "ag-theme-alpine pt-2"} style={{ height: 900 }}>
                            <AgGridReact rowData={rowData} columnDefs={colDefs} rowSelection={rowSelection} onRowDoubleClicked={onRowDoubleClicked} />
                        </div>
                    </>}
                    {activeTab == 'New Shipment' && <NewShipment theme={theme} onCancelNewShipment={onCancelNewShipment} onSubmitChanges={onSubmitChanges} />}
                    {activeTab == 'Edit Shipment' && <NewShipment theme={theme} selectedShipment={selectedShipment} onCancelNewShipment={onCancelNewShipment} onSubmitChanges={onSubmitChanges} />}
                </Card.Body>
            </Card>
        </Container>
    )
};

export default Truck;