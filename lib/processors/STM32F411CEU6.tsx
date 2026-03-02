import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["PH0-OSC_IN"],
  pin6: ["PH1-OSC_OUT"],
  pin7: ["NRST"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["PA0"],
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
  pin22: ["VCAP1"],
  pin23: ["VSS1"],
  pin24: ["VDD1"],
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
  pin35: ["VSS2"],
  pin36: ["VDD2"],
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
  pin47: ["VSS3"],
  pin48: ["VDD3"],
  pin49: ["pin49"]
} as const

export const STM32F411CEU6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C60420"
  ]
}}
      manufacturerPartNumber="STM32F411CEU6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.750819999999976mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.250440000000026mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.7500599999999906mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.2496800000000121mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.7492999999999768mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.24891999999999825mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.24891999999999825mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.7493000000000052mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.2496800000000121mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.7500599999999906mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.2504399999999976mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.7508200000000045mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="3.44932mm" pcbY="-2.7508200000000045mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="3.44932mm" pcbY="-2.2504400000000118mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="3.44932mm" pcbY="-1.7500600000000048mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.44932mm" pcbY="-1.249679999999998mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="3.44932mm" pcbY="-0.7493000000000052mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="3.44932mm" pcbY="-0.24891999999999825mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="3.44932mm" pcbY="0.24891999999999825mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="3.44932mm" pcbY="0.7493000000000052mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="3.44932mm" pcbY="1.249679999999998mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="3.44932mm" pcbY="1.7500599999999906mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="3.44932mm" pcbY="2.2504399999999833mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="3.44932mm" pcbY="2.7508199999999903mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.7508200000000045mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="2.2504399999999976mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="1.7500599999999906mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="1.2496800000000121mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="0.7493000000000052mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="0.24891999999999825mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.24891999999999825mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-0.7492999999999768mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-1.2496800000000121mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-1.7500599999999906mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-2.250440000000026mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-2.750819999999976mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-3.44932mm" pcbY="2.7508199999999903mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-3.44932mm" pcbY="2.2504399999999833mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-3.44932mm" pcbY="1.7500599999999906mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-3.44932mm" pcbY="1.249679999999998mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-3.44932mm" pcbY="0.7493000000000052mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-3.44932mm" pcbY="0.24891999999999825mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-3.44932mm" pcbY="-0.24891999999999825mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-3.44932mm" pcbY="-0.7493000000000052mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-3.44932mm" pcbY="-1.249679999999998mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-3.44932mm" pcbY="-1.7500600000000048mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-3.44932mm" pcbY="-2.2504400000000118mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-3.44932mm" pcbY="-2.7508200000000045mm" width="0.8999982mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="-1.4210854715202004e-14mm" width="5.499989mm" height="5.499989mm" shape="rect" />
<silkscreenpath route={[{"x":3.699941800000005,"y":-3.2749998000000033},{"x":3.699941800000005,"y":-3.699941800000005},{"x":3.2749998000000176,"y":-3.699941800000005}]} />
<silkscreenpath route={[{"x":3.699941800000005,"y":3.2751521999999937},{"x":3.699941800000005,"y":3.7000941999999952},{"x":3.2749998000000176,"y":3.7000941999999952}]} />
<silkscreenpath route={[{"x":-3.7000941999999952,"y":3.2751521999999937},{"x":-3.7000941999999952,"y":3.7000941999999952},{"x":-3.275152200000008,"y":3.7000941999999952}]} />
<silkscreenpath route={[{"x":-3.275152200000008,"y":-3.699941800000005},{"x":-3.7000941999999952,"y":-3.699941800000005},{"x":-3.7000941999999952,"y":-3.2749998000000033}]} />
<silkscreenpath route={[{"x":-3.5509962000000144,"y":-4.201083800000006},{"x":-3.699737255997661,"y":-4.050441770296075},{"x":-3.5497261999999807,"y":-3.9010643759852712},{"x":-3.3997151440023288,"y":-4.050441770296075},{"x":-3.548456200000004,"y":-4.201083800000006}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=16912e571dfb42a9a47b4df7b841ed45&pn=C60420",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -0.00007619999996677507, y: 0.00007619999999519678, z: 4.299993000000001 },
      }}
      {...props}
    />
  )
}