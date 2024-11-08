import { AgGridReact } from 'ag-grid-react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { Button, Card, ButtonGroup, Form } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiCopyBold } from 'react-icons/pi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import NewShipment from './NewShipment';
import { ToastMsgType, useGlobalContext } from '../context/GlobalProvider';
import { useDispatch, useSelector } from 'react-redux';
import { debounce as _debounce } from 'lodash';
import ConfirmModal from './ConfirmModal';
import { deleteShipments as  deleteStoreShipments} from '../store/authSlice';

const Truck = ({ theme }: any) => {
    const dispatch = useDispatch();
    const shipments: any = useSelector((state: any) => state?.auth.shipments)
    const { showToastMsg, setLoading } = useGlobalContext();
    const [activeTab, setActiveTab] = useState('Shipment List');
    const [isManual, setManual] = useState(false);
    const [rowData, setRowData] = useState(shipments);
    const [colDefs/*, setColDefs*/]: any[] = useState([{ "field": "delivered" }, { "field": "fileNo" }, { "field": "mblNo" }, { "field": "quotationNo" }, { "field": "consignee" }, { "field": "postDate" }, { "field": "office" }, { "field": "customer" }, { "field": "trucker" }, { "field": "vesselFlightNo" }, { "field": "customerRefNo" }, { "field": "billTo" }, { "field": "type" }, { "field": "shipType" }, { "field": "carrierBkgNo" }, { "field": "shipper" }, { "field": "sales" }, { "field": "portOfLoading" }, { "field": "portOfDischarge" }, { "field": "etd" }, { "field": "finalEta" }, { "field": "eta" }, { "field": "emptyPickup" }, { "field": "freightPickup" }, { "field": "deliveryTo" }, { "field": "emptyReturn" }, { "field": "packageType" }, { "field": "packageWeight" }, { "field": "measurement" }, { "field": "estimatedDeliveryDate" }]);
    const [selectedShipment, setSelectedShipment] = useState({});
    const [showConfirm, setShowConfirm] = useState(false);

    const [size, setSize] = useState([0, 0]);
    const [gridApi, setGridApi] = useState(null);
    useLayoutEffect(() => {
        let updateSize = _debounce(() => {
            console.log('updateSize'+size);
            setSize([window.innerWidth, window.innerHeight])
        }, 100);
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        if (isManual) {
            let filtered = shipments.filter((item: any) => item.isMyShipment == true);
            setRowData(filtered);
        } else {
            setRowData(shipments);
        }
    }, [shipments, activeTab, isManual]);

    const onGridReady = useCallback((params: any) => {
        setGridApi(params.api);
    }, []);

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

    const deleteShipments = () => {
        let selectedData = (gridApi as any).getSelectedRows();
        if(selectedData.length){
            setShowConfirm(true);
        }
    }

    const handleConfirm = () => {
        let selectedData = (gridApi as any).getSelectedRows() ||  [];
        dispatch(deleteStoreShipments(selectedData));//{payload:selectedData}
        setShowConfirm(false);
    };

    const handleManualToggle = () => {
        setManual((prevChecked) => !prevChecked);
    };

    const getGridHeight = () => {
        try {
            let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            let headerHeight = Math.max(document.getElementsByClassName('navbar')[0].clientHeight || 0);
            let breadCrumHeight = Math.max(document.getElementsByClassName('breadcrum')[0].clientHeight || 0);
            let buttonGrpHeight = Math.max(document.getElementsByClassName('buttonGrp')[0].clientHeight || 0);
            let footerHeight = Math.max(document.getElementsByTagName('footer')[0].clientHeight || 0);
            let gridHeight = vh - headerHeight - breadCrumHeight - buttonGrpHeight - footerHeight - 85;
            return gridHeight;
        } catch (e) {
            //console.log(e);
        }
    }

    //ADDED FOR DEMO PURPOSE
    useLayoutEffect(() => {
        setLoading(true);
        showToastMsg(ToastMsgType.SUCCESS, "Data loaded Successfully");
        setTimeout(() => setLoading(false), 3000);
    }, [])

    return (
        <>
            <div className="text-start p-2 darkGreenBg breadcrum">
                Home&nbsp;&nbsp;<FaGreaterThan />&nbsp;&nbsp;{activeTab}
            </div>
            <Card className={theme == 'dark' ? "bg-dark text-white" : "bg-light"}>
                <Card.Header className='buttonGrp'>
                    <Row>
                        <Col xs={1} lg={1} sm={1} className='align-content-center'>
                            {activeTab == 'Shipment List' && <ButtonGroup className="me-2" aria-label="First group">
                                <Button onClick={() => setActiveTab('New Shipment')}><IoMdAddCircle size={22} /></Button>
                                <Button disabled><PiCopyBold size={22} /></Button>
                                <Button variant="danger" onClick={() => deleteShipments()}><RiDeleteBin5Line size={22} /></Button>
                            </ButtonGroup>}
                        </Col>
                        <Col></Col>
                        {(activeTab == 'New Shipment' || activeTab == 'Edit Shipment') && <Col xs={1} lg={1} className='align-content-center' sm={1}>{<AiOutlineClose className="bg-danger" size={20} onClick={() => setActiveTab('Shipment List')} />}</Col>}
                        {(activeTab == 'Shipment List') && <Col xs={5} lg={2} sm={4} className='align-content-center'>{<Form.Check type="switch" id="custom-switch" label="My Shipment" checked={isManual} onChange={handleManualToggle} />}</Col>}
                    </Row>
                </Card.Header>
                <Card.Body>
                    {activeTab == 'Shipment List' && <>
                        <div className={theme == "dark" ? "ag-theme-alpine-dark pt-2" : "ag-theme-alpine pt-2"} style={{ height: getGridHeight() }}>
                            <AgGridReact onGridReady={onGridReady} rowData={rowData} columnDefs={colDefs} rowSelection={rowSelection} onRowDoubleClicked={onRowDoubleClicked} />
                        </div>
                    </>}
                    {activeTab == 'New Shipment' && <NewShipment theme={theme} onCancelNewShipment={onCancelNewShipment} onSubmitChanges={onSubmitChanges} />}
                    {activeTab == 'Edit Shipment' && <NewShipment theme={theme} selectedShipment={selectedShipment} onCancelNewShipment={onCancelNewShipment} onSubmitChanges={onSubmitChanges} />}
                </Card.Body>
            </Card>
            <ConfirmModal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        onConfirm={handleConfirm}
        title="Delete Item"
        body="Are you sure you want to delete this item(s)? This action cannot be undone."
      />
        </>
    )
};

export default Truck;