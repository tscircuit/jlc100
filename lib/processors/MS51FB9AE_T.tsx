import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["VSS"],
  pin8: ["pin8"],
  pin9: ["VDD"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"]
} as const

export const MS51FB9AE_T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C465921"
  ]
}}
      manufacturerPartNumber="MS51FB9AE_T"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.925064000000134mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.2750780000000077mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.6250920000001088mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.9751059999999825mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.32486600000004273mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.32512000000008356mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.9751059999999825mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.625091999999995mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.2750780000000077mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.9250640000000203mm" pcbY="-2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-2.925064000000134mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-2.2750780000000077mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.6250920000001088mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.9751059999999825mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.32486600000004273mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.32512000000008356mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.9751059999999825mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.625091999999995mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.2750780000000077mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.9250640000000203mm" pcbY="2.870961999999963mm" width="0.3640074mm" height="1.7420082mm" shape="rect" />
<silkscreenpath route={[{"x":-3.326206200000115,"y":-1.7713960000000952},{"x":-3.326206200000115,"y":1.7713959999999815},{"x":3.3262061999998878,"y":1.7713959999999815},{"x":3.3262061999998878,"y":-1.7713960000000952},{"x":-3.326206200000115,"y":-1.7713960000000952}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f8ba5b4174b9490d8c445fbe2ed40b80&pn=C465921",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -911.4749360000001, y: 683.720883, z: 4.0500061999999994 },
      }}
      {...props}
    />
  )
}