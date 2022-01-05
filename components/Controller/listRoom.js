import DenQuatTemHum from '../DenQuatTemHum';
import ControlRGB from '../ControlRGB';
import DisplayGasKitchen from '../DisplayGasKitchen';
import DenBathroom from '../DenBathroom';
export default [
  {
    roomName: 'LIVINGROOM',
    control1: <DenQuatTemHum />,
    control2: <ControlRGB />,
  },
  {
    roomName: 'BEDROOM',
    control1: <DenQuatTemHum />,
  },
  {
    roomName: 'KITCHEN',
    control1: <DenQuatTemHum />,
    control2: <DisplayGasKitchen />,
  },
  {
    roomName: 'BATHROOM',
    control1: <DenBathroom />,
  },
];
