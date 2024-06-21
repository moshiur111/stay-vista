// import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // const category = params.get('category')
  // console.log(category);

  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
