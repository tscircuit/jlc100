import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["PIO0_12"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["PIO0_16"],
  pin11: ["PIO0_27"],
  pin12: ["PIO0_26"],
  pin13: ["PIO0_25"],
  pin14: ["PIO0_24"],
  pin15: ["PIO0_15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["VDD"],
  pin20: ["VREFN"],
  pin21: ["VREFP"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["EP"]
} as const

export const LPC824M201JHI33Y = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C528755"
  ]
}}
      manufacturerPartNumber="LPC824M201JHI33Y"
      footprint={<footprint>
        <smtpad portHints={["pin33"]} pcbX="0.00012699999996357292mm" pcbY="-0.010159999999970637mm" width="3.5999928mm" height="3.5999928mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.4999949999999984mm" pcbY="-1.7602199999999613mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.4999949999999984mm" pcbY="-1.260093999999981mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.4999949999999984mm" pcbY="-0.7602219999999846mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.4999949999999984mm" pcbY="-0.2600959999999759mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="2.4999949999999984mm" pcbY="0.24003000000003283mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.4999949999999984mm" pcbY="0.7399020000000149mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.4999949999999984mm" pcbY="1.2400280000000095mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="2.4999949999999984mm" pcbY="1.73990000000002mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-2.4999950000000126mm" pcbY="1.73990000000002mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-2.4999950000000126mm" pcbY="1.2400280000000095mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.4999950000000126mm" pcbY="0.7399020000000149mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-2.4999950000000126mm" pcbY="0.24003000000003283mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-2.4999950000000126mm" pcbY="-0.2600959999999759mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-2.4999950000000126mm" pcbY="-0.7602219999999846mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-2.4999950000000126mm" pcbY="-1.260093999999981mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-2.4999950000000126mm" pcbY="-1.7602199999999613mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.749933000000027mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.2500610000000165mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.749935000000022mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.2500630000000399mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.25006299999996884mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.7501889999999776mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.2500609999999739mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="1.7501869999999542mm" pcbY="2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.7501869999999542mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.2500609999999739mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.7501889999999776mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.25006299999996884mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.2500630000000399mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.749935000000022mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.2500610000000165mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.749933000000027mm" pcbY="-2.5100280000000055mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<silkscreenpath route={[{"x":2.1237955999999656,"y":-2.510078799999974},{"x":2.500045799999981,"y":-2.510078799999974}]} />
<silkscreenpath route={[{"x":-2.49994420000003,"y":-2.510078799999974},{"x":-2.49994420000003,"y":-2.1287485999999944}]} />
<silkscreenpath route={[{"x":-2.49994420000003,"y":2.1136610000000218},{"x":-2.49994420000003,"y":2.489911200000023}]} />
<silkscreenpath route={[{"x":2.500045799999981,"y":2.489911200000023},{"x":2.500045799999981,"y":2.108581000000015}]} />
<silkscreenpath route={[{"x":2.500045799999981,"y":-2.133828599999987},{"x":2.500045799999981,"y":-2.510078799999974}]} />
<silkscreenpath route={[{"x":-2.49994420000003,"y":2.489911200000023},{"x":-2.1236940000000146,"y":2.489911200000023}]} />
<silkscreenpath route={[{"x":2.1187155999999874,"y":2.489911200000023},{"x":2.500045799999981,"y":2.489911200000023}]} />
<silkscreenpath route={[{"x":-2.49994420000003,"y":-2.510078799999974},{"x":-2.1186140000000364,"y":-2.510078799999974}]} />
<silkscreenpath route={[{"x":-2.5755092000000133,"y":-3.0860237999999924},{"x":-2.6992309869628173,"y":-2.960401843912422},{"x":-2.5742392000000223,"y":-2.836043452107191},{"x":-2.449247413037213,"y":-2.960401843912422},{"x":-2.572969200000017,"y":-3.0860237999999924}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=8b11b4b75acf4c5eaea11a6ae95d6a9c&pn=C528755",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0.000050799999982586996, y: -0.010083799999989651, z: 3.299995 },
      }}
      {...props}
    />
  )
}