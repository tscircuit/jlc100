import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PB9"],
  pin2: ["PC14-OSC32IN"],
  pin3: ["PC15-OSC32OUT"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["NRST"],
  pin7: ["PA0"],
  pin8: ["PA1"],
  pin9: ["PA2"],
  pin10: ["PA3"],
  pin11: ["PA4"],
  pin12: ["PA5"],
  pin13: ["PA6"],
  pin14: ["PA7"],
  pin15: ["PB0"],
  pin16: ["PB1"],
  pin17: ["PB2"],
  pin18: ["PA8"],
  pin19: ["PA9"],
  pin20: ["PC6"],
  pin21: ["PA10"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["PA13"],
  pin25: ["PA14-BOOT0"],
  pin26: ["PA15"],
  pin27: ["PB3"],
  pin28: ["PB4"],
  pin29: ["PB5"],
  pin30: ["PB6"],
  pin31: ["PB7"],
  pin32: ["PB8"]
} as const

export const STM32G030K6T6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C529331"
  ]
}}
      manufacturerPartNumber="STM32G030K6T6"
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
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=28eea09222224639a3999749955a1ff3&pn=C529331",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -885.698, y: 841.629, z: -4.284051300000056 },
      }}
      {...props}
    />
  )
}