import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"]
} as const

export const STC8G1K08A_36I_SOP8 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C915663"
  ]
}}
      manufacturerPartNumber="STC8G1K08A_36I_SOP8"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.9050000000000864mm" pcbY="-2.7678379999999834mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6349999999999909mm" pcbY="-2.7678379999999834mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.6349999999999909mm" pcbY="-2.7678379999999834mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.9049999999999727mm" pcbY="-2.7678379999999834mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9050000000000864mm" pcbY="2.767838000000097mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.6349999999999909mm" pcbY="2.767838000000097mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.6349999999999909mm" pcbY="2.767838000000097mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.9049999999999727mm" pcbY="2.767838000000097mm" width="0.5739892mm" height="2.0355052000000002mm" shape="rect" />
<silkscreenpath route={[{"x":-2.5262078000000656,"y":-1.5214091999999937},{"x":-2.5262078000000656,"y":1.5214092000001074},{"x":2.526207799999952,"y":1.5214092000001074},{"x":2.526207799999952,"y":-1.5214091999999937},{"x":-2.5262078000000656,"y":-1.5214091999999937}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=765d86d522014712af5a26ea59477fa9&pn=C915663",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0.2539999999999054, y: 0.5080000000000382, z: 3.299995 },
      }}
      {...props}
    />
  )
}