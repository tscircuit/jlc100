import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["DVCC"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
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
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["DVSS"]
} as const

export const MSP430G2553IPW28R = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C13622"
  ]
}}
      manufacturerPartNumber="MSP430G2553IPW28R"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.225035999999932mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-3.575050000000033mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.925064000000134mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.2750780000000077mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.6250920000001088mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.9751059999999825mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.32486600000004273mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.32512000000008356mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.9751059999999825mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.625091999999995mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.2750780000000077mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.9250640000000203mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="3.5750499999999192mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.225035999999818mm" pcbY="-2.865754999999922mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-4.225035999999932mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-3.575050000000033mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-2.925064000000134mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-2.2750780000000077mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.6250920000001088mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.9751059999999825mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.32486600000004273mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.32512000000008356mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.9751059999999825mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.625091999999995mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.2750780000000077mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.9250640000000203mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.5750499999999192mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.225035999999818mm" pcbY="2.8657550000000356mm" width="0.3430016mm" height="1.7314926000000002mm" shape="rect" />
<silkscreenpath route={[{"x":-4.926202999999987,"y":-1.7712690000000748},{"x":-4.926202999999987,"y":1.771523000000002},{"x":4.926202999999987,"y":1.771523000000002},{"x":4.926202999999987,"y":-1.7712690000000748},{"x":-4.926202999999987,"y":-1.7712690000000748}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f7dbdf008a9445baa985eb4ff1776a2b&pn=C13622",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -914.5610360000001, y: 685.965227, z: 5.650003 },
      }}
      {...props}
    />
  )
}