import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["GND"],
  pin4: ["pin4"],
  pin5: ["VDD"],
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
  pin21: ["EP"]
} as const

export const N76E003AQ20 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C90832"
  ]
}}
      manufacturerPartNumber="N76E003AQ20"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.8001000000000431mm" pcbY="-1.407414000000017mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.4000500000000784mm" pcbY="-1.407414000000017mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-1.407414000000017mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.4000499999999647mm" pcbY="-1.407414000000017mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.8000999999999294mm" pcbY="-1.407414000000017mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.407414000000017mm" pcbY="-0.8000999999999294mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.407414000000017mm" pcbY="-0.4000499999999647mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.407414000000017mm" pcbY="0mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.407414000000017mm" pcbY="0.4000500000000784mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.407414000000017mm" pcbY="0.8001000000000431mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.8000999999999294mm" pcbY="1.4074140000001307mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.4000499999999647mm" pcbY="1.4074140000001307mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="1.4074140000001307mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.4000500000000784mm" pcbY="1.4074140000001307mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.8001000000000431mm" pcbY="1.4074140000001307mm" width="0.19999959999999997mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.4074140000001307mm" pcbY="0.8001000000000431mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-1.4074140000001307mm" pcbY="0.4000500000000784mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.4074140000001307mm" pcbY="0mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-1.4074140000001307mm" pcbY="-0.4000499999999647mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-1.4074140000001307mm" pcbY="-0.8000999999999294mm" width="0.6649974mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="0mm" width="1.6500093999999998mm" height="1.6500093999999998mm" shape="rect" />
<silkscreenpath route={[{"x":-1.5761970000000929,"y":1.1025124000000233},{"x":-1.5761970000000929,"y":1.5761970000000929},{"x":-1.1025124000000233,"y":1.5761970000000929}]} />
<silkscreenpath route={[{"x":1.5761969999998655,"y":1.1025124000000233},{"x":1.5761969999998655,"y":1.5761970000000929},{"x":1.1025123999999096,"y":1.5761970000000929}]} />
<silkscreenpath route={[{"x":-1.5761970000000929,"y":-1.1025124000000233},{"x":-1.5761970000000929,"y":-1.5761969999999792},{"x":-1.1025124000000233,"y":-1.5761969999999792}]} />
<silkscreenpath route={[{"x":1.5761969999998655,"y":-1.1025124000000233},{"x":1.5761969999998655,"y":-1.5761969999999792},{"x":1.1025123999999096,"y":-1.5761969999999792}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=61b6ae921434449696dbd4fc3f995851&pn=C90832",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -0.9399127000000476 },
      }}
      {...props}
    />
  )
}