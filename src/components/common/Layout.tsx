import {Dimensions} from 'react-native';
import styled from 'styled-components/native';


const Layout = ({children}) => {
    return (
        <LayoutWrapper>{children}</LayoutWrapper>
    );
};

const LayoutWrapper = styled.View`
  width: ${Dimensions.get('screen').width};
  padding-left: 10px;
  padding-right: 10px;
`;

export default Layout;
