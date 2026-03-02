import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCAP"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["RESETB"],
  pin7: ["AVCC"],
  pin8: ["PA02"],
  pin9: ["PA04"],
  pin10: ["PA05"],
  pin11: ["PA06"],
  pin12: ["PA07"],
  pin13: ["PB00"],
  pin14: ["PB01"],
  pin15: ["PB11"],
  pin16: ["DVSS1"],
  pin17: ["DVCC"],
  pin18: ["PA08"],
  pin19: ["PA09"],
  pin20: ["PA10"],
  pin21: ["PA11"],
  pin22: ["PA12"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["PA15"],
  pin26: ["PB03"],
  pin27: ["PB04"],
  pin28: ["PB05"],
  pin29: ["PB06"],
  pin30: ["PB07"],
  pin31: ["BOOT0"],
  pin32: ["DVSS2"],
  pin33: ["EP"]
} as const

export const HC32F190FCUA_QFN32TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C784689"
  ]
}}
      manufacturerPartNumber="HC32F190FCUA_QFN32TR"
      footprint={<footprint>
        <smtpad portHints={["pin9"]} pcbX="2.050034000000011mm" pcbY="-1.4000479999999982mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.050034000000011mm" pcbY="-0.999998000000005mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.050034000000011mm" pcbY="-0.5999479999999977mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.050034000000011mm" pcbY="-0.19989800000001878mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="2.050034000000011mm" pcbY="0.19989799999999036mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.050034000000011mm" pcbY="0.5999479999999977mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.050034000000011mm" pcbY="0.9999979999999908mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="2.050034000000011mm" pcbY="1.4000479999999982mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-2.050034000000011mm" pcbY="1.4000479999999982mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-2.050034000000011mm" pcbY="0.9999979999999908mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.050034000000011mm" pcbY="0.5999479999999977mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-2.050034000000011mm" pcbY="0.19989799999999036mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-2.050034000000011mm" pcbY="-0.19989800000001878mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-2.050034000000011mm" pcbY="-0.5999479999999977mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-2.050034000000011mm" pcbY="-0.999998000000005mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-2.050034000000011mm" pcbY="-1.4000479999999982mm" width="0.6999986mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" width="2.7999944mm" height="2.7999944mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.4000479999999982mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.000251999999989mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.6002019999999959mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.20015199999997435mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.19989799999999036mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.5999479999999835mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.9997439999999926mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.3997940000000142mm" pcbY="-2.050034000000011mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="1.3997940000000142mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="0.9997439999999926mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.5999479999999835mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.19989799999999036mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.20015199999997435mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.6002019999999959mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.000251999999989mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.4000479999999982mm" pcbY="2.0500339999999966mm" width="0.19999959999999997mm" height="0.6999986mm" shape="rect" />
<silkscreenpath route={[{"x":1.7909539999999993,"y":2.010155999999995},{"x":2.0598383999999896,"y":2.010155999999995},{"x":2.0598383999999896,"y":1.7413477999999856}]} />
<silkscreenpath route={[{"x":-1.9401536000000021,"y":-1.7210278000000017},{"x":-1.939975799999985,"y":-1.7210278000000017},{"x":-1.6711675999999898,"y":-1.989836000000011}]} />
<silkscreenpath route={[{"x":-1.9401536000000021,"y":1.7413477999999856},{"x":-1.9401536000000021,"y":2.010155999999995}]} />
<silkscreenpath route={[{"x":-1.6711675999999898,"y":-1.989836000000011},{"x":-1.9401536000000021,"y":-1.989836000000011},{"x":-1.9401536000000021,"y":-1.7210278000000017}]} />
<silkscreenpath route={[{"x":2.0598383999999896,"y":-1.7210278000000017},{"x":2.0598383999999896,"y":-1.989836000000011},{"x":1.7909539999999993,"y":-1.989836000000011}]} />
<silkscreenpath route={[{"x":-1.9401536000000021,"y":2.010155999999995},{"x":-1.6711675999999898,"y":2.010155999999995}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6dd4b697c6114e499488df6aa2ee6458&pn=C784689",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 2.799996 },
      }}
      {...props}
    />
  )
}