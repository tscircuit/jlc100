import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["DVSS2"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["DVSS1"],
  pin24: ["DVCC"],
  pin25: ["EP"]
} as const

export const MSP430FR2433IRGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C191026"
  ]
}}
      manufacturerPartNumber="MSP430FR2433IRGER"
      footprint={<footprint>
        <smtpad portHints={["pin25"]} pcbX="-0.0010160000000496439mm" pcbY="-0.0008890000000292275mm" width="2.7999944mm" height="2.7999944mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.2501880000000938mm" pcbY="2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.750315999999998mm" pcbY="2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.25018999999997504mm" pcbY="2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.2496819999997797mm" pcbY="2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.7498079999999163mm" pcbY="2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.2496799999998984mm" pcbY="2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.0416519999998854mm" pcbY="1.2500610000000734mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.0416519999998854mm" pcbY="0.7499350000000504mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="2.0416519999998854mm" pcbY="0.2500629999999546mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.0416519999998854mm" pcbY="-0.2500629999999546mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.0416519999998854mm" pcbY="-0.7499350000000504mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="2.0416519999998854mm" pcbY="-1.2500610000000734mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.2496799999998984mm" pcbY="-2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.7498079999999163mm" pcbY="-2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.2496819999997797mm" pcbY="-2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.25018999999997504mm" pcbY="-2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.750315999999998mm" pcbY="-2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.2501880000000938mm" pcbY="-2.048129000000017mm" width="0.299974mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.041651999999999mm" pcbY="-1.2498070000000325mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.041651999999999mm" pcbY="-0.7499350000000504mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.041651999999999mm" pcbY="-0.2498089999999138mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.041651999999999mm" pcbY="0.2500629999999546mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.041651999999999mm" pcbY="0.7501889999999776mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.041651999999999mm" pcbY="1.2500610000000734mm" width="0.7999983999999999mm" height="0.29999939999999997mm" shape="rect" />
<silkscreenpath route={[{"x":-2.104491600000074,"y":1.7001743999999235},{"x":-2.104491600000074,"y":2.1001481999999214},{"x":-1.7001743999999235,"y":2.1000212000000147}]} />
<silkscreenpath route={[{"x":-2.1001990000000887,"y":-1.6998696000000564},{"x":-2.1001990000000887,"y":-2.099970399999961},{"x":-1.7001743999999235,"y":-2.099970399999961}]} />
<silkscreenpath route={[{"x":2.0997926000000007,"y":-1.5999460000000454},{"x":2.0997926000000007,"y":-2.099970399999961},{"x":1.699818799999889,"y":-2.099970399999961}]} />
<silkscreenpath route={[{"x":1.6954753999999639,"y":2.1001481999999214},{"x":2.095449199999962,"y":2.1001481999999214},{"x":2.095449199999962,"y":1.7001743999999235}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f9f49049b1e946aebac8a4ca9e490364&pn=C191026",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00015240000004723697, y: 0.00005079999993995443, z: -1.648128200000042 },
      }}
      {...props}
    />
  )
}