import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PB1"],
  pin2: ["PA12"],
  pin3: ["PA13-SWD"],
  pin4: ["PA14-SWC"],
  pin5: ["PF2-NRST"],
  pin6: ["PA0"],
  pin7: ["PA1"],
  pin8: ["PA2"],
  pin9: ["PA3"],
  pin10: ["PA4"],
  pin11: ["PA5"],
  pin12: ["PA6"],
  pin13: ["PA7"],
  pin14: ["PB0"],
  pin15: ["VCC"],
  pin16: ["PA8"],
  pin17: ["VSS"]
} as const

export const PY32F002AW15U6TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5291740"
  ]
}}
      manufacturerPartNumber="PY32F002AW15U6TR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.7484110000001465mm" pcbY="-1.4498320000000149mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.24853900000016438mm" pcbY="-1.4498320000000149mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.25158699999997225mm" pcbY="-1.4498320000000149mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.7514589999999544mm" pcbY="-1.450085999999942mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.4499589999999216mm" pcbY="-0.7498080000001437mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.4499589999999216mm" pcbY="-0.2499360000000479mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.4499589999999216mm" pcbY="0.25019000000008873mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.4499589999999216mm" pcbY="0.7500619999999572mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.7499350000000504mm" pcbY="1.450085999999942mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.25006299999984094mm" pcbY="1.450085999999942mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.2500630000000683mm" pcbY="1.450085999999942mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.7491730000001553mm" pcbY="1.450085999999942mm" width="0.25001219999999996mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.4499590000000353mm" pcbY="0.7500619999999572mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.4499590000000353mm" pcbY="0.25019000000008873mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.4499590000000353mm" pcbY="-0.2499360000000479mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.4499590000000353mm" pcbY="-0.7498080000001437mm" width="0.7500112mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.0003809999999475622mm" pcbY="0mm" width="1.6999966mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":1.1076431999997567,"y":-1.4997430000000804},{"x":1.5001239999999143,"y":-1.4997430000000804}]} />
<silkscreenpath route={[{"x":-1.4998954000001277,"y":1.5002763999999615},{"x":-1.4998954000001277,"y":1.108329000000026}]} />
<silkscreenpath route={[{"x":-1.4998954000001277,"y":-1.1039347999999336},{"x":-1.4998954000001277,"y":-1.4997430000000804}]} />
<silkscreenpath route={[{"x":1.5001239999999143,"y":-1.4997430000000804},{"x":1.5001239999999143,"y":-1.1039347999999336}]} />
<silkscreenpath route={[{"x":1.5001239999999143,"y":1.108329000000026},{"x":1.5001239999999143,"y":1.5002763999999615}]} />
<silkscreenpath route={[{"x":-1.4998954000001277,"y":1.5002763999999615},{"x":-1.1046206000000893,"y":1.5002763999999615}]} />
<silkscreenpath route={[{"x":1.1061191999998528,"y":1.5002763999999615},{"x":1.5001239999999143,"y":1.5002763999999615}]} />
<silkscreenpath route={[{"x":-1.4998954000001277,"y":-1.4997430000000804},{"x":-1.1046206000000893,"y":-1.4997430000000804}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=b5ebee96879a47e9a7bdfe0867319312&pn=C5291740",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -1.0250915999999506 },
      }}
      {...props}
    />
  )
}