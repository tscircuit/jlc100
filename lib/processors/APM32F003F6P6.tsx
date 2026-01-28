import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PD4"],
  pin2: ["PD5"],
  pin3: ["PD6"],
  pin4: ["NRST"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["VSS"],
  pin8: ["VCAP"],
  pin9: ["VDD"],
  pin10: ["PA3"],
  pin11: ["PB5"],
  pin12: ["PB4"],
  pin13: ["PC3"],
  pin14: ["PC4"],
  pin15: ["PC5"],
  pin16: ["PC6"],
  pin17: ["PC7"],
  pin18: ["PD1"],
  pin19: ["PD2"],
  pin20: ["PD3"]
} as const

export const APM32F003F6P6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C22388660"
  ]
}}
      manufacturerPartNumber="APM32F003F6P6"
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
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f8ba5b4174b9490d8c445fbe2ed40b80&pn=C22388660",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -911.4749360000001, y: 683.720883, z: 4.0500061999999994 },
      }}
      {...props}
    />
  )
}