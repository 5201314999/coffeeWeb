
import {Platform} from 'react-native';

const getLineHeight=fontSize=>{
    const extra=(fontSize>20)?0.1:0.33;
return parseInt(String(fontSize*(1+extra)),10);
}

const fontFamily='PingFang Sc';
export const base={
    fontSize:15,
    lineHeight:getLineHeight(15),
    ...Platform.select({
        android:{
            fontFamily
        },
        ios:{
            fontFamily
        }
    })
};


const extraText={
    fontSize:12,
    lineHeight:getLineHeight(12)
};
const baseTitle={
    fontSize:16,
    fontWeight:"500",
    lineHeight:getLineHeight(16)
};

export default{
    base,
    baseTitle,
    extraText
}
