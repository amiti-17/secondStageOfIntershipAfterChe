import { useState } from "react";

export default function useConfig() {

  const [isConfigReady, setIsConfigReady] = useState(false);

  return { isConfigReady, setIsConfigReady }

}