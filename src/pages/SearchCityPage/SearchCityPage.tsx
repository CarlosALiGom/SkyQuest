import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useCords from "../../hooks/useCords/useCords";
import { loadCordsActionCreator } from "../../store/city/citySlice";
import EmptyMap from "../../components/EmptyMap/EmptyMap";
import Map from "../../components/Map/Map";

const SearchCityPage = (): React.ReactElement => {
  const city = useAppSelector((state) => state.city.city);
  const cords = useAppSelector((state) => state.city.cords);
  const dispatch = useAppDispatch();
  const { getCityCords } = useCords();

  useEffect(() => {
    (async () => {
      if (city !== "") {
        const cords = await getCityCords(city);
        dispatch(loadCordsActionCreator(cords));
      }
    })();
  }, [city, dispatch, getCityCords]);

  return <>{cords.lat !== "" && cords.lon !== "" ? <Map /> : <EmptyMap />}</>;
};

export default SearchCityPage;
