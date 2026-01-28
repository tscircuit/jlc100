import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13_TAMPER_RTC"],
  pin3: ["PC14_OSC32_IN"],
  pin4: ["PC15_OSC32_OUT"],
  pin5: ["PD0_OSC_IN"],
  pin6: ["PD1_OSC_OUT"],
  pin7: ["NRST"],
  pin8: ["VSSA"],
  pin9: ["VDDA"],
  pin10: ["PA0_WAKEUP"],
  pin11: ["PA1"],
  pin12: ["PA2"],
  pin13: ["PA3"],
  pin14: ["PA4"],
  pin15: ["PA5"],
  pin16: ["PA6"],
  pin17: ["PA7"],
  pin18: ["PB0"],
  pin19: ["PB1"],
  pin20: ["PB2"],
  pin21: ["PB10"],
  pin22: ["PB11"],
  pin23: ["VSS_1"],
  pin24: ["VDD_1"],
  pin25: ["PB12"],
  pin26: ["PB13"],
  pin27: ["PB14"],
  pin28: ["PB15"],
  pin29: ["PA8"],
  pin30: ["PA9"],
  pin31: ["PA10"],
  pin32: ["PA11"],
  pin33: ["PA12"],
  pin34: ["PA13"],
  pin35: ["VSS_2"],
  pin36: ["VDD_2"],
  pin37: ["PA14"],
  pin38: ["PA15"],
  pin39: ["PB3"],
  pin40: ["PB4"],
  pin41: ["PB5"],
  pin42: ["PB6"],
  pin43: ["PB7"],
  pin44: ["BOOT0"],
  pin45: ["PB8"],
  pin46: ["PB9"],
  pin47: ["VSS_3"],
  pin48: ["VDD_3"]
} as const

export const GD32F103C8T6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C77994"
  ]
}}
      manufacturerPartNumber="GD32F103C8T6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.7500579999999957mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.249932000000001mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.7500599999999906mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.249933999999996mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.7500619999999998mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.24993599999999105mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.24993599999999105mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.7500619999999856mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.249933999999996mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.7500599999999906mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.249932000000001mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.7500579999999957mm" pcbY="-4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.0500299999999925mm" pcbY="-2.750058000000003mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.0500299999999925mm" pcbY="-2.249932000000001mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.0500299999999925mm" pcbY="-1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.0500299999999925mm" pcbY="-1.2499340000000032mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="4.0500299999999925mm" pcbY="-0.7500620000000069mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="4.0500299999999925mm" pcbY="-0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="4.0500299999999925mm" pcbY="0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="4.0500299999999925mm" pcbY="0.7500619999999998mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="4.0500299999999925mm" pcbY="1.249933999999996mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="4.0500299999999925mm" pcbY="1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="4.0500299999999925mm" pcbY="2.249931999999994mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="4.0500299999999925mm" pcbY="2.7500579999999957mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.7500579999999957mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="2.249932000000001mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="1.7500599999999906mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="1.249933999999996mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="0.7500619999999856mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="0.24993599999999105mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.24993599999999105mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-0.7500619999999998mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-1.249933999999996mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-1.7500599999999906mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-2.249932000000001mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-2.7500579999999957mm" pcbY="4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-4.0500299999999925mm" pcbY="2.7500579999999957mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-4.0500299999999925mm" pcbY="2.249931999999994mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-4.0500299999999925mm" pcbY="1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-4.0500299999999925mm" pcbY="1.249933999999996mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-4.0500299999999925mm" pcbY="0.7500619999999998mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-4.0500299999999925mm" pcbY="0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-4.0500299999999925mm" pcbY="-0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-4.0500299999999925mm" pcbY="-0.7500620000000069mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-4.0500299999999925mm" pcbY="-1.2499340000000032mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-4.0500299999999925mm" pcbY="-1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-4.0500299999999925mm" pcbY="-2.249932000000001mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-4.0500299999999925mm" pcbY="-2.750058000000003mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<silkscreenpath route={[{"x":-2.750007199999999,"y":2.750007199999999},{"x":2.7500071999999847,"y":2.750007199999999},{"x":2.7500071999999847,"y":-2.750007199999999},{"x":-2.750007199999999,"y":-2.750007199999999},{"x":-2.750007199999999,"y":2.750007199999999}]} />
<silkscreenpath route={[{"x":-3.5001199999999955,"y":-4.150360000000006},{"x":-3.6488610559976564,"y":-3.999717970296075},{"x":-3.4988499999999902,"y":-3.850340575985264},{"x":-3.348838944002324,"y":-3.999717970296075},{"x":-3.4975799999999992,"y":-4.150360000000006}]} />
<silkscreenpath route={[{"x":-2.100580000000008,"y":-1.8999199999999945},{"x":-2.2887163503048242,"y":-1.7602885755021305},{"x":-2.215185444868041,"y":-1.5378353737742998},{"x":-1.980894555131954,"y":-1.5378353737742998},{"x":-1.9073636496951991,"y":-1.7602885755021305},{"x":-2.0955000000000013,"y":-1.8999199999999945}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a396a72d4bc5451488d3c2f08fc922f7&pn=C77994",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -0.0009905999999944015, y: 0.002006600000001413, z: 5.308294983392 },
      }}
      {...props}
    />
  )
}