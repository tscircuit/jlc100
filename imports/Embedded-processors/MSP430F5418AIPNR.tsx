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
  pin11: ["AVCC"],
  pin12: ["AVSS"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["DVSS1"],
  pin16: ["DVCC1"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["DVSS3"],
  pin31: ["DVCC3"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["pin35"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["pin44"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["pin47"],
  pin48: ["pin48"],
  pin49: ["VCORE"],
  pin50: ["DVSS2"],
  pin51: ["DVCC2"],
  pin52: ["pin52"],
  pin53: ["pin53"],
  pin54: ["pin54"],
  pin55: ["pin55"],
  pin56: ["pin56"],
  pin57: ["pin57"],
  pin58: ["pin58"],
  pin59: ["pin59"],
  pin60: ["pin60"],
  pin61: ["pin61"],
  pin62: ["pin62"],
  pin63: ["pin63"],
  pin64: ["pin64"],
  pin65: ["pin65"],
  pin66: ["pin66"],
  pin67: ["DVCC4"],
  pin68: ["DVSS4"],
  pin69: ["pin69"],
  pin70: ["pin70"],
  pin71: ["pin71"],
  pin72: ["pin72"],
  pin73: ["pin73"],
  pin74: ["pin74"],
  pin75: ["pin75"],
  pin76: ["pin76"],
  pin77: ["pin77"],
  pin78: ["pin78"],
  pin79: ["pin79"],
  pin80: ["pin80"]
} as const

export const MSP430F5418AIPNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C59496"
  ]
}}
      manufacturerPartNumber="MSP430F5418AIPNR"
      footprint={<footprint>
        <smtpad portHints={["pin21"]} pcbX="6.8999100000000055mm" pcbY="-4.750053999999999mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="4.750054000000006mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="4.750054000000006mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="6.8999100000000055mm" pcbY="4.750054000000006mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="-4.750054000000006mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="-6.899909999999977mm" pcbY="4.750054000000006mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin80"]} pcbX="-6.899909999999977mm" pcbY="-4.750053999999999mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-4.750054000000006mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-4.249927999999983mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-3.7500560000000007mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-3.249929999999978mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.7500579999999957mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.249932000000001mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.7500599999999906mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.2499340000000245mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.7500619999999856mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.24993599999999105mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.24993600000001948mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.7500619999999856mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.2499340000000245mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.7500599999999906mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.249932000000001mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="2.750058000000024mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="3.249930000000006mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="3.7500560000000007mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="4.249927999999983mm" pcbY="-6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="6.8999100000000055mm" pcbY="-4.249928000000004mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="6.8999100000000055mm" pcbY="-3.750056000000008mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="6.8999100000000055mm" pcbY="-3.249929999999999mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="6.8999100000000055mm" pcbY="-2.750058000000003mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="6.8999100000000055mm" pcbY="-2.249932000000001mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="6.8999100000000055mm" pcbY="-1.7500599999999906mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="6.8999100000000055mm" pcbY="-1.2499340000000032mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="6.8999100000000055mm" pcbY="-0.7500620000000069mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="6.8999100000000055mm" pcbY="-0.24993600000000527mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="6.8999100000000055mm" pcbY="0.24993600000000527mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="6.8999100000000055mm" pcbY="0.7500619999999998mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="6.8999100000000055mm" pcbY="1.249933999999996mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="6.8999100000000055mm" pcbY="1.7500599999999906mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="6.8999100000000055mm" pcbY="2.249932000000001mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="6.8999100000000055mm" pcbY="2.7500579999999957mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="6.8999100000000055mm" pcbY="3.249930000000006mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="6.8999100000000055mm" pcbY="3.7500560000000007mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="6.8999100000000055mm" pcbY="4.249927999999997mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="4.249927999999983mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="3.7500560000000007mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="3.249930000000006mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="2.750058000000024mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="2.249932000000001mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="1.7500599999999906mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="1.2499340000000245mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="0.7500619999999856mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="0.24993600000001948mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="-0.24993599999999105mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="-0.7500619999999856mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="-1.2499340000000245mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="-1.7500599999999906mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="-2.249932000000001mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="-2.7500579999999957mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="-3.249929999999978mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="-3.7500560000000007mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="-4.249927999999983mm" pcbY="6.8999100000000055mm" width="0.2800096mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="-6.899909999999977mm" pcbY="4.249927999999997mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="-6.899909999999977mm" pcbY="3.7500560000000007mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="-6.899909999999977mm" pcbY="3.249930000000006mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin65"]} pcbX="-6.899909999999977mm" pcbY="2.7500579999999957mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin66"]} pcbX="-6.899909999999977mm" pcbY="2.249932000000001mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin67"]} pcbX="-6.899909999999977mm" pcbY="1.7500599999999906mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin68"]} pcbX="-6.899909999999977mm" pcbY="1.249933999999996mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin69"]} pcbX="-6.899909999999977mm" pcbY="0.7500619999999998mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin70"]} pcbX="-6.899909999999977mm" pcbY="0.24993600000000527mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin71"]} pcbX="-6.899909999999977mm" pcbY="-0.24993600000000527mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin72"]} pcbX="-6.899909999999977mm" pcbY="-0.7500620000000069mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin73"]} pcbX="-6.899909999999977mm" pcbY="-1.2499340000000032mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin74"]} pcbX="-6.899909999999977mm" pcbY="-1.7500599999999906mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin75"]} pcbX="-6.899909999999977mm" pcbY="-2.249932000000001mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin76"]} pcbX="-6.899909999999977mm" pcbY="-2.750058000000003mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin77"]} pcbX="-6.899909999999977mm" pcbY="-3.249929999999999mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin78"]} pcbX="-6.899909999999977mm" pcbY="-3.750056000000008mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin79"]} pcbX="-6.899909999999977mm" pcbY="-4.249928000000004mm" width="1.499997mm" height="0.2800096mm" shape="rect" />
<silkscreenpath route={[{"x":-5.750001199999986,"y":5.7500012},{"x":5.750001200000014,"y":5.7500012},{"x":5.750001200000014,"y":-5.7500012},{"x":-5.750001199999986,"y":-5.7500012},{"x":-5.750001199999986,"y":5.7500012}]} />
<silkscreenpath route={[{"x":-4.749799999999993,"y":-4.450080000000007},{"x":-4.960734378607924,"y":-4.360871640570068},{"x":-5.047256711767744,"y":-4.148821341500593},{"x":-4.958942117039101,"y":-3.937511200170853},{"x":-4.74726000000004,"y":-3.850091952880888},{"x":-4.535577882960979,"y":-3.9375112001708317},{"x":-4.4472632882322785,"y":-4.14882134150055},{"x":-4.533785621392099,"y":-4.360871640570046},{"x":-4.7447199999999725,"y":-4.450080000000007}]} />
<silkscreenpath route={[{"x":-5.40003999999999,"y":-7.000240000000005},{"x":-5.548781055997665,"y":-6.849597970296074},{"x":-5.398769999999985,"y":-6.70022057598527},{"x":-5.248758944002304,"y":-6.849597970296074},{"x":-5.397500000000008,"y":-7.000240000000005}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=3054dfda187d4aca8a5768d7a8f5a9ec&pn=C59496",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -6.849908500000006 },
      }}
      {...props}
    />
  )
}