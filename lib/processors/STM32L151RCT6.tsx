import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VLCD"],
  pin2: ["PC13-WKUP2"],
  pin3: ["PC14-OSC32_IN"],
  pin4: ["PC15-OSC32_OUT"],
  pin5: ["PH0-OSC_IN"],
  pin6: ["PH1-OSC_OUT"],
  pin7: ["NRST"],
  pin8: ["PC0"],
  pin9: ["PC1"],
  pin10: ["PC2"],
  pin11: ["PC3"],
  pin12: ["VSSA"],
  pin13: ["VDDA"],
  pin14: ["PA0-WKUP1"],
  pin15: ["PA1"],
  pin16: ["PA2"],
  pin17: ["PA3"],
  pin18: ["VSS_4"],
  pin19: ["VDD_4"],
  pin20: ["PA4"],
  pin21: ["PA5"],
  pin22: ["PA6"],
  pin23: ["PA7"],
  pin24: ["PC4"],
  pin25: ["PC5"],
  pin26: ["PB0"],
  pin27: ["PB1"],
  pin28: ["PB2"],
  pin29: ["PB10"],
  pin30: ["PB11"],
  pin31: ["VSS_1"],
  pin32: ["VDD_1"],
  pin33: ["PB12"],
  pin34: ["PB13"],
  pin35: ["PB14"],
  pin36: ["PB15"],
  pin37: ["PC6"],
  pin38: ["PC7"],
  pin39: ["PC8"],
  pin40: ["PC9"],
  pin41: ["PA8"],
  pin42: ["PA9"],
  pin43: ["PA10"],
  pin44: ["PA11"],
  pin45: ["PA12"],
  pin46: ["PA13"],
  pin47: ["VSS_2"],
  pin48: ["VDD_2"],
  pin49: ["PA14"],
  pin50: ["PA15"],
  pin51: ["PC10"],
  pin52: ["PC11"],
  pin53: ["PC12"],
  pin54: ["PD2"],
  pin55: ["PB3"],
  pin56: ["PB4"],
  pin57: ["PB5"],
  pin58: ["PB6"],
  pin59: ["PB7"],
  pin60: ["BOOT0"],
  pin61: ["PB8"],
  pin62: ["PB9"],
  pin63: ["VSS_3"],
  pin64: ["VDD_3"]
} as const

export const STM32L151RCT6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C124721"
  ]
}}
      manufacturerPartNumber="STM32L151RCT6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.750056000000029mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-3.249930000000006mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.750058000000024mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.249932000000001mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.7500599999999906mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.2499340000000245mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.750062000000014mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.24993600000001948mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.24993599999999105mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.7500619999999856mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.2499340000000245mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.7500599999999906mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="2.249932000000001mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.7500579999999957mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="3.249929999999978mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.7500560000000007mm" pcbY="-5.688203000000009mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="5.700013999999982mm" pcbY="-3.7382450000000205mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="5.700013999999982mm" pcbY="-3.2381190000000046mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="5.700013999999982mm" pcbY="-2.7382470000000083mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="5.700013999999982mm" pcbY="-2.2381210000000067mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="5.700013999999982mm" pcbY="-1.7382489999999962mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="5.700013999999982mm" pcbY="-1.2381230000000158mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="5.700013999999982mm" pcbY="-0.7382510000000053mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="5.700013999999982mm" pcbY="-0.2381249999999966mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="5.700013999999982mm" pcbY="0.2617469999999855mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="5.700013999999982mm" pcbY="0.76187299999998mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="5.700013999999982mm" pcbY="1.2617449999999906mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="5.700013999999982mm" pcbY="1.761870999999985mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="5.700013999999982mm" pcbY="2.2617429999999814mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="5.700013999999982mm" pcbY="2.76186899999999mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="5.700013999999982mm" pcbY="3.2617410000000007mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="5.700013999999982mm" pcbY="3.761866999999995mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="3.7500560000000007mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="3.249929999999978mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="2.7500579999999957mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="2.249932000000001mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="1.7500599999999906mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="1.2499340000000245mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="0.7500619999999856mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="0.24993599999999105mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-0.24993600000001948mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-0.750062000000014mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-1.2499340000000245mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-1.7500599999999906mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-2.249932000000001mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-2.750058000000024mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-3.249930000000006mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-3.750056000000029mm" pcbY="5.688202999999987mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="-5.70001400000001mm" pcbY="3.761866999999995mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="-5.70001400000001mm" pcbY="3.2617410000000007mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="-5.70001400000001mm" pcbY="2.76186899999999mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="-5.70001400000001mm" pcbY="2.2617429999999814mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="-5.70001400000001mm" pcbY="1.761870999999985mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="-5.70001400000001mm" pcbY="1.2617449999999906mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="-5.70001400000001mm" pcbY="0.76187299999998mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="-5.70001400000001mm" pcbY="0.2617469999999855mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="-5.70001400000001mm" pcbY="-0.2381249999999966mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="-5.70001400000001mm" pcbY="-0.7382510000000053mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="-5.70001400000001mm" pcbY="-1.2381230000000158mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="-5.70001400000001mm" pcbY="-1.7382489999999962mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="-5.70001400000001mm" pcbY="-2.2381210000000067mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="-5.70001400000001mm" pcbY="-2.7382470000000083mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="-5.70001400000001mm" pcbY="-3.2381190000000046mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="-5.70001400000001mm" pcbY="-3.7382450000000205mm" width="1.499997mm" height="0.29999939999999997mm" shape="rect" />
<silkscreenpath route={[{"x":-4.999989999999997,"y":-4.119397400000011},{"x":-4.999964599999998,"y":-4.119397400000011},{"x":-4.131183000000021,"y":-4.9881790000000095}]} />
<silkscreenpath route={[{"x":4.999989999999968,"y":5.011800999999991},{"x":4.131208399999991,"y":5.011800999999991}]} />
<silkscreenpath route={[{"x":4.999989999999968,"y":5.011800999999991},{"x":4.999989999999968,"y":4.142993999999987}]} />
<silkscreenpath route={[{"x":-4.999989999999997,"y":4.142993999999987},{"x":-4.999989999999997,"y":5.011800999999991},{"x":-4.131183000000021,"y":5.011800999999991}]} />
<silkscreenpath route={[{"x":-4.131183000000021,"y":-4.9881790000000095},{"x":-4.999989999999997,"y":-4.9881790000000095},{"x":-4.999989999999997,"y":-4.119397400000011}]} />
<silkscreenpath route={[{"x":4.999989999999968,"y":-4.119397400000011},{"x":4.999989999999968,"y":-4.9881790000000095},{"x":4.131182999999993,"y":-4.9881790000000095}]} />
<silkscreenpath route={[{"x":-4.2500042000000064,"y":4.261815199999987},{"x":-4.2500042000000064,"y":-4.238193200000012},{"x":4.2500042000000064,"y":-4.238193200000012},{"x":4.2500042000000064,"y":4.261815199999987},{"x":-4.2500042000000064,"y":4.261815199999987}]} />
<silkscreenpath route={[{"x":-3.2994600000000105,"y":-3.013329000000013},{"x":-3.510394378607913,"y":-2.9241206405700666},{"x":-3.5969167117677614,"y":-2.712070341500585},{"x":-3.508602117039061,"y":-2.500760200170852},{"x":-3.2969200000000285,"y":-2.413340952880887},{"x":-3.0852378829609677,"y":-2.500760200170852},{"x":-2.996923288232267,"y":-2.712070341500585},{"x":-3.0834456213921158,"y":-2.9241206405700666},{"x":-3.294380000000018,"y":-3.013329000000013}]} />
<silkscreenpath route={[{"x":-4.361256200000014,"y":-5.47817040000001},{"x":-4.509997255997689,"y":-5.327528370296079},{"x":-4.359986200000009,"y":-5.178150975985275},{"x":-4.209975144002357,"y":-5.327528370296079},{"x":-4.3587162000000035,"y":-5.47817040000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=7e9b9111dcfd48d3add0eab11d882721&pn=C124721",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0.011810999999994465, z: -5.638201499999998 },
      }}
      {...props}
    />
  )
}