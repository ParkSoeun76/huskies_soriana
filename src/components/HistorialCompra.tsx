import { HStack } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { getHistoria } from "@/service/ServicioHistoria";
import { Historia } from "@/types/Historias";
import HistoriaCard from "./HistoriaCard";

const HistorialCompra = ({ email }: { email: string }) => {
  const [historias, setHistorias] = useState<Historia[]>([]);

  useEffect(() => {
    const fetchHistoria = async () => {
      const histo = await getHistoria(email);
      setHistorias(histo);
    };

    fetchHistoria();
  }, []);

  return (
    <HStack>
      <div style={{ width: "100vw", height: "100vh" }}>
        {historias.map((hist) => (
          <HistoriaCard key={hist.idHistoria} hist={hist} />
        ))}
      </div>
    </HStack>
  );
};

export default HistorialCompra;
