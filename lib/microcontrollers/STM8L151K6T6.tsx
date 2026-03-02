import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NRSTPA1"],
  pin2: ["PA2"],
  pin3: ["PA3"],
  pin4: ["PA4"],
  pin5: ["PA5"],
  pin6: ["PA6"],
  pin7: ["VSS1VSSAVREF_NEG"],
  pin8: ["VDD1VDDAVREF_POS"],
  pin9: ["PD0"],
  pin10: ["PD1"],
  pin11: ["PD2"],
  pin12: ["PD3"],
  pin13: ["PB0"],
  pin14: ["PB1"],
  pin15: ["PB2"],
  pin16: ["PB3"],
  pin17: ["PB4"],
  pin18: ["PB5"],
  pin19: ["PB6"],
  pin20: ["PB7"],
  pin21: ["PD4"],
  pin22: ["PD5"],
  pin23: ["PD6"],
  pin24: ["PD7"],
  pin25: ["PC0"],
  pin26: ["PC1"],
  pin27: ["PC2"],
  pin28: ["PC3"],
  pin29: ["PC4"],
  pin30: ["PC5"],
  pin31: ["PC6"],
  pin32: ["PA0"]
} as const

export const STM8L151K6T6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C8259"
  ]
}}
      manufacturerPartNumber="STM8L151K6T6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.8000959999999395mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.99999600000001mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1998960000001944mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.4000500000000784mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.4000499999999647mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.1998960000000807mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.9999959999998964mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.8000959999999395mm" pcbY="-4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.242054000000053mm" pcbY="-2.8000959999999395mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="4.242054000000053mm" pcbY="-1.9999959999998964mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="4.242054000000053mm" pcbY="-1.199895999999967mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="4.242054000000053mm" pcbY="-0.4000499999999647mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.242054000000053mm" pcbY="0.4000500000000784mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.242054000000053mm" pcbY="1.1998960000000807mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.242054000000053mm" pcbY="1.99999600000001mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.242054000000053mm" pcbY="2.8000959999999395mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.8000959999999395mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.9999959999998964mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.1998960000000807mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.4000499999999647mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.4000500000000784mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.1998960000001944mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.99999600000001mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-2.8000959999999395mm" pcbY="4.242054000000053mm" width="0.44800520000000005mm" height="1.6839946000000001mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-4.242054000000053mm" pcbY="2.8000959999999395mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-4.242054000000053mm" pcbY="1.99999600000001mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-4.242054000000053mm" pcbY="1.1998960000000807mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-4.242054000000053mm" pcbY="0.4000500000000784mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-4.242054000000053mm" pcbY="-0.4000499999999647mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-4.242054000000053mm" pcbY="-1.199895999999967mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-4.242054000000053mm" pcbY="-1.9999959999998964mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-4.242054000000053mm" pcbY="-2.8000959999999395mm" width="1.6839946000000001mm" height="0.44800520000000005mm" shape="rect" />
<silkscreenpath route={[{"x":-3.5761929999999893,"y":3.2144969999999375},{"x":-3.5761929999999893,"y":3.5761929999998756},{"x":-3.2144969999999375,"y":3.5761929999998756}]} />
<silkscreenpath route={[{"x":3.5761929999998756,"y":3.2144969999999375},{"x":3.5761929999998756,"y":3.5761929999998756},{"x":3.2144969999999375,"y":3.5761929999998756}]} />
<silkscreenpath route={[{"x":-3.5761929999999893,"y":-3.2144969999999375},{"x":-3.5761929999999893,"y":-3.5761929999999893},{"x":-3.2144969999999375,"y":-3.5761929999999893}]} />
<silkscreenpath route={[{"x":3.5761929999998756,"y":-3.2144969999999375},{"x":3.5761929999998756,"y":-3.5761929999999893},{"x":3.2144969999999375,"y":-3.5761929999999893}]} />
<silkscreenpath route={[{"x":-3.1713932000000113,"y":-3.1713932000000113},{"x":-3.1713932000000113,"y":3.1713932000000113},{"x":3.1713931999998977,"y":3.1713932000000113},{"x":3.1713931999998977,"y":-3.1713932000000113},{"x":-3.1713932000000113,"y":-3.1713932000000113}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=28eea09222224639a3999749955a1ff3&pn=C8259",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -885.698, y: 841.629, z: -4.284051300000056 },
      }}
      {...props}
    />
  )
}