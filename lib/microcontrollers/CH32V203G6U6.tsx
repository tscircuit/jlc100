import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["NRST"],
  pin5: ["VDDA"],
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
  pin16: ["VSS1"],
  pin17: ["VDD"],
  pin18: ["PA9"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["PA15"],
  pin24: ["PB3"],
  pin25: ["PB4"],
  pin26: ["PB5"],
  pin27: ["PB6"],
  pin28: ["PB7"],
  pin29: ["VSS2"]
} as const

export const CH32V203G6U6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5142280"
  ]
}}
      manufacturerPartNumber="CH32V203G6U6"
      footprint={<footprint>
        <smtpad portHints={["pin4"]} pcbX="-0.001015999999935957mm" pcbY="-1.9999959999998964mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.4000500000000784mm" pcbY="-1.9999959999998964mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.8001000000000431mm" pcbY="-1.9999959999998964mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.199895999999967mm" pcbY="-1.9999959999998964mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.39979600000003757mm" pcbY="-1.9999959999998964mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.8000999999999294mm" pcbY="-1.9999959999998964mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.1998959999998533mm" pcbY="-1.9999959999998964mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.99999600000001mm" pcbY="-1.199895999999967mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.99999600000001mm" pcbY="-0.8000999999999294mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.99999600000001mm" pcbY="-0.4000499999999647mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.9992340000000013mm" pcbY="1.1368683772161603e-13mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.99999600000001mm" pcbY="0.39979600000015125mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.99999600000001mm" pcbY="0.8001000000001568mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.99999600000001mm" pcbY="1.1998960000001944mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.199895999999967mm" pcbY="1.99999600000001mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="0.8001000000000431mm" pcbY="1.99999600000001mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.39979600000003757mm" pcbY="1.99999600000001mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="0mm" pcbY="1.99999600000001mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-0.39979600000003757mm" pcbY="1.99999600000001mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-0.8000999999999294mm" pcbY="1.99999600000001mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-1.1998959999998533mm" pcbY="1.99999600000001mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.9999959999998964mm" pcbY="1.1998960000001944mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.9999959999998964mm" pcbY="0.8001000000001568mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.9999959999998964mm" pcbY="0.39979600000015125mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-1.999742000000083mm" pcbY="1.1368683772161603e-13mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-1.9999959999998964mm" pcbY="-0.3997959999999239mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-1.9999959999998964mm" pcbY="-0.8000999999999294mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-1.9999959999998964mm" pcbY="-1.199895999999967mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="0.0002540000001545195mm" pcbY="1.1368683772161603e-13mm" width="2.6999945999999997mm" height="2.6999945999999997mm" shape="rect" />
<silkscreenpath route={[{"x":-2.2199854000000414,"y":-1.599996799999758},{"x":-2.2199854000000414,"y":-2.2100031999998464},{"x":-1.6400017999999363,"y":-2.2100031999998464}]} />
<silkscreenpath route={[{"x":-1.4999969999998939,"y":-1.9999959999998964},{"x":-1.99999600000001,"y":-1.9999959999998964},{"x":-1.99999600000001,"y":-1.4999969999998939}]} />
<silkscreenpath route={[{"x":1.9999960000001238,"y":-1.4999969999998939},{"x":1.9999960000001238,"y":-1.9999959999998964},{"x":1.4999970000001213,"y":-1.9999959999998964}]} />
<silkscreenpath route={[{"x":1.4999970000001213,"y":1.99999600000001},{"x":1.9999960000001238,"y":1.99999600000001},{"x":1.9999960000001238,"y":1.4999970000001213}]} />
<silkscreenpath route={[{"x":-1.99999600000001,"y":1.4999970000001213},{"x":-1.99999600000001,"y":1.99999600000001},{"x":-1.4999969999998939,"y":1.99999600000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a0fb1bb7338949299dd5e86fcf2df1f9&pn=C5142280",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 1.1368683772161603e-13, z: -1.549995299999989 },
      }}
      {...props}
    />
  )
}