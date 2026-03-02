import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AVDD"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["LDO5V"],
  pin8: ["VCC"],
  pin9: ["HO1"],
  pin10: ["LO1"],
  pin11: ["HO2"],
  pin12: ["LO2"],
  pin13: ["HO3"],
  pin14: ["LO3"],
  pin15: ["GND"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"]
} as const

export const LKS32MC037EM6S8 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5182268"
  ]
}}
      manufacturerPartNumber="LKS32MC037EM6S8"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.4924999999999926mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.8575000000000017mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.2224999999999966mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.5874999999999915mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.9525000000000006mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.31749999999999545mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.31749999999999545mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.9525000000000006mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.5875000000000057mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.2224999999999966mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.8575000000000017mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="3.492500000000007mm" pcbY="-2.5849580000000145mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="3.492500000000007mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.8575000000000017mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.2224999999999966mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.5875000000000057mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.9525000000000006mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="0.31749999999999545mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-0.31749999999999545mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-0.9525000000000006mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-1.5874999999999915mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-2.2224999999999966mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-2.8575000000000017mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-3.4924999999999926mm" pcbY="2.5849580000000003mm" width="0.35559999999999997mm" height="1.8050002mm" shape="rect" />
<silkscreenpath route={[{"x":-4.401184999999998,"y":-1.3776960000000003},{"x":-4.401184999999998,"y":1.377695999999986},{"x":4.401184999999998,"y":1.377695999999986},{"x":4.401184999999998,"y":-1.3776960000000003},{"x":-4.401184999999998,"y":-1.3776960000000003}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=713b331fdc51420ca02d3ad4add8ad4f&pn=C5182268",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.4210854715202004e-14, z: -2.687458100000005 },
      }}
      {...props}
    />
  )
}