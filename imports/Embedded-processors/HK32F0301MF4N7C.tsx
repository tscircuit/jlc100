import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NRST_PA0"],
  pin2: ["PA1"],
  pin3: ["PA2"],
  pin4: ["pin4"],
  pin5: ["PD7"],
  pin6: ["pin6"],
  pin7: ["PA3"],
  pin8: ["PB5"],
  pin9: ["PB4"],
  pin10: ["PC3"],
  pin11: ["PC4"],
  pin12: ["PC5"],
  pin13: ["PC6"],
  pin14: ["PC7"],
  pin15: ["PD1"],
  pin16: ["PD2"],
  pin17: ["PD3"],
  pin18: ["PD4"],
  pin19: ["PD5"],
  pin20: ["PD6"],
  pin21: ["VSS"]
} as const

export const HK32F0301MF4N7C = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C19727307"
  ]
}}
      manufacturerPartNumber="HK32F0301MF4N7C"
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
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=61b6ae921434449696dbd4fc3f995851&pn=C19727307",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -0.9399127000000476 },
      }}
      {...props}
    />
  )
}