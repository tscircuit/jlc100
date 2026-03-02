import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["VCC"],
  pin7: ["pin7"],
  pin8: ["GND"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"]
} as const

export const STC15W408AS_35I_SOP16 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C54946"
  ]
}}
      manufacturerPartNumber="STC15W408AS_35I_SOP16"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.44500000000005mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-3.175000000000068mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.9050000000000864mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.6349999999999909mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.6349999999999909mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.9049999999999727mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="3.1749999999999545mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="4.444999999999936mm" pcbY="-2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-4.44500000000005mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-3.175000000000068mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.9050000000000864mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.6349999999999909mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.6349999999999909mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.9049999999999727mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="3.1749999999999545mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.444999999999936mm" pcbY="2.8724860000000945mm" width="0.5599937999999999mm" height="1.7450053999999997mm" shape="rect" />
<silkscreenpath route={[{"x":-5.076190000000111,"y":-1.7713960000000952},{"x":-5.076190000000111,"y":1.7713959999999815},{"x":5.076189999999997,"y":1.7713959999999815},{"x":5.076189999999997,"y":-1.7713960000000952},{"x":-5.076190000000111,"y":-1.7713960000000952}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=07126628bc464d5389bb996c52812f54&pn=C54946",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 5.799989999999999 },
      }}
      {...props}
    />
  )
}