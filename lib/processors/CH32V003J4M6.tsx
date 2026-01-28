import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["VSS"],
  pin3: ["pin3"],
  pin4: ["VDD"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"]
} as const

export const CH32V003J4M6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5346354"
  ]
}}
      manufacturerPartNumber="CH32V003J4M6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.9050000000000011mm" pcbY="-2.7960319999999967mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6350000000000051mm" pcbY="-2.7960319999999967mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.6350000000000051mm" pcbY="-2.7960319999999967mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.9050000000000011mm" pcbY="-2.7960319999999967mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.9050000000000011mm" pcbY="2.796032000000011mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.6350000000000051mm" pcbY="2.796032000000011mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.6350000000000051mm" pcbY="2.796032000000011mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9050000000000011mm" pcbY="2.796032000000011mm" width="0.6500114mm" height="2.032mm" shape="rect" />
<silkscreenpath route={[{"x":-2.5400000000000063,"y":0.38196520000001044},{"x":-2.5400000000000063,"y":1.4480540000000133},{"x":2.565399999999997,"y":1.4480540000000133},{"x":2.565399999999997,"y":-1.4729459999999932},{"x":-2.4891999999999967,"y":-1.4729459999999932},{"x":-2.5145999999999873,"y":-1.4729459999999932},{"x":-2.5145999999999873,"y":-0.5331459999999879}]} />
<silkscreenpath route={[{"x":-2.5145999999999873,"y":-0.5331459999999879},{"x":-2.293004071822125,"y":-0.4614596669722033},{"x":-2.135333286416369,"y":-0.29004318830834563},{"x":-2.0823761584030365,"y":-0.06324100948158673},{"x":-2.1478323886154413,"y":0.1602744657194961},{"x":-2.3147688312198085,"y":0.32268108460733913},{"x":-2.5400000000000063,"y":0.38196520000001044}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=9dcbb9fc68264ef1a08511e705db5d3a&pn=C5346354",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -3.0120320000000094 },
      }}
      {...props}
    />
  )
}