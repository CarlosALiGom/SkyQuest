import axios from "axios";
import { CordsStructure } from "../../store/city/types";
import { useCallback } from "react";

const useCords = () => {
  const getCityCords = useCallback(
    async (city: string): Promise<CordsStructure> => {
      const { data } = await axios.get<CordsStructure[]>(
        `https://nominatim.openstreetmap.org/search?city=${city}&format=json`,
      );

      const response = data[0];

      const cords = {
        lat: response.lat,
        lon: response.lon,
      };

      return cords;
    },
    [],
  );

  return { getCityCords };
};

export default useCords;
