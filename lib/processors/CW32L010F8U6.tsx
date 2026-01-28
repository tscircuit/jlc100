import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["PA00"],
  pin3: ["PA01"],
  pin4: ["VSS"],
  pin5: ["Vcore"],
  pin6: ["VDD"],
  pin7: ["PA02"],
  pin8: ["PB00I"],
  pin9: ["PB01"],
  pin10: ["PA03"],
  pin11: ["PA04"],
  pin12: ["PA05"],
  pin13: ["PA06"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["PB02"],
  pin17: ["PB03"],
  pin18: ["PB04"],
  pin19: ["PB05"],
  pin20: ["PB06"],
  pin21: ["EP"]
} as const

export const CW32L010F8U6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C41368434"
  ]
}}
      manufacturerPartNumber="CW32L010F8U6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.4999969999998939mm" pcbY="0.8002270000000635mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.4999969999998939mm" pcbY="0.40017699999998513mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.4999969999998939mm" pcbY="0.0001269999999067295mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.4999969999998939mm" pcbY="-0.39992300000017167mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.4999969999998939mm" pcbY="-0.7999730000000227mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.8002270000000635mm" pcbY="-1.4999970000000076mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.4001770000000988mm" pcbY="-1.4999970000000076mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.00012700000002041634mm" pcbY="-1.4999970000000076mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.39966899999990346mm" pcbY="-1.4999970000000076mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.7997189999998682mm" pcbY="-1.4999970000000076mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.4999969999998939mm" pcbY="-0.7999730000000227mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.4999969999998939mm" pcbY="-0.39992300000017167mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.4999969999998939mm" pcbY="0.0001269999999067295mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.4999969999998939mm" pcbY="0.40017699999998513mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.4999969999998939mm" pcbY="0.8002270000000635mm" width="0.5999987999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="0.799972999999909mm" pcbY="1.4999969999998939mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.3999229999999443mm" pcbY="1.4999969999998939mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="0.00012700000002041634mm" pcbY="1.4999969999998939mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-0.3999229999999443mm" pcbY="1.4999969999998939mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-0.7999730000000227mm" pcbY="1.4999969999998939mm" width="0.19999959999999997mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.00012700000002041634mm" pcbY="0.0001269999999067295mm" width="1.6999966mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":-1.523949200000061,"y":1.0902949999999691},{"x":-1.523949200000061,"y":1.142923799999835}]} />
<silkscreenpath route={[{"x":-1.0903204000001097,"y":-1.5240762000000814},{"x":-1.523949200000061,"y":-1.5240762000000814},{"x":-1.523949200000061,"y":-1.0901934000000892}]} />
<silkscreenpath route={[{"x":1.5240507999999409,"y":-1.0901934000000892},{"x":1.5240507999999409,"y":-1.5240762000000814},{"x":1.089913999999908,"y":-1.5240762000000814}]} />
<silkscreenpath route={[{"x":1.0901679999999487,"y":1.5239237999999204},{"x":1.5240507999999409,"y":1.5239237999999204},{"x":1.5240507999999409,"y":1.0902949999999691}]} />
<silkscreenpath route={[{"x":-1.523949200000061,"y":1.0902949999999691},{"x":-1.523949200000061,"y":1.5239237999999204},{"x":-1.0900664000000688,"y":1.5239237999999204}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=1d86c79cd28f426d878253d41e36f9fb&pn=C41368434",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.00005079999993995443, y: -0.0000762000000804619, z: -0.9999963999999977 },
      }}
      {...props}
    />
  )
}