import Helmet from "../components/Helmet";
import heroSliderData from '../assets/data/discounts'
import DiscountView from "../components/DiscountView";

const Discount=()=>{
    return(
    <Helmet title="Khuyến mãi">
        <DiscountView
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5}/>
    </Helmet>
    )

};
export default Discount;