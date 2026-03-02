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
  pin30: ["pin30"],
  pin31: ["pin31"],
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
  pin49: ["pin49"],
  pin50: ["pin50"],
  pin51: ["pin51"],
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
  pin67: ["pin67"],
  pin68: ["pin68"],
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
  pin80: ["pin80"],
  pin81: ["pin81"],
  pin82: ["pin82"],
  pin83: ["pin83"],
  pin84: ["pin84"],
  pin85: ["pin85"],
  pin86: ["pin86"],
  pin87: ["pin87"],
  pin88: ["pin88"],
  pin89: ["pin89"],
  pin90: ["pin90"],
  pin91: ["pin91"],
  pin92: ["pin92"],
  pin93: ["pin93"],
  pin94: ["pin94"],
  pin95: ["pin95"],
  pin96: ["pin96"],
  pin97: ["pin97"],
  pin98: ["pin98"],
  pin99: ["pin99"],
  pin100: ["pin100"],
  pin101: ["pin101"],
  pin102: ["pin102"],
  pin103: ["pin103"],
  pin104: ["pin104"],
  pin105: ["pin105"],
  pin106: ["pin106"],
  pin107: ["pin107"],
  pin108: ["pin108"],
  pin109: ["pin109"],
  pin110: ["pin110"],
  pin111: ["pin111"],
  pin112: ["pin112"],
  pin113: ["pin113"],
  pin114: ["pin114"],
  pin115: ["pin115"],
  pin116: ["pin116"],
  pin117: ["pin117"],
  pin118: ["pin118"],
  pin119: ["pin119"],
  pin120: ["pin120"],
  pin121: ["pin121"],
  pin122: ["pin122"],
  pin123: ["pin123"],
  pin124: ["pin124"],
  pin125: ["pin125"],
  pin126: ["pin126"],
  pin127: ["pin127"],
  pin128: ["pin128"],
  pin129: ["pin129"],
  pin130: ["pin130"],
  pin131: ["pin131"],
  pin132: ["pin132"],
  pin133: ["pin133"],
  pin134: ["pin134"],
  pin135: ["pin135"],
  pin136: ["pin136"],
  pin137: ["pin137"],
  pin138: ["pin138"],
  pin139: ["pin139"],
  pin140: ["pin140"],
  pin141: ["pin141"],
  pin142: ["pin142"],
  pin143: ["pin143"],
  pin144: ["pin144"],
  pin145: ["pin145"],
  pin146: ["pin146"],
  pin147: ["pin147"],
  pin148: ["pin148"],
  pin149: ["pin149"],
  pin150: ["pin150"],
  pin151: ["pin151"],
  pin152: ["pin152"],
  pin153: ["pin153"],
  pin154: ["pin154"],
  pin155: ["pin155"],
  pin156: ["pin156"],
  pin157: ["pin157"],
  pin158: ["pin158"],
  pin159: ["pin159"],
  pin160: ["pin160"],
  pin161: ["pin161"],
  pin162: ["pin162"],
  pin163: ["pin163"],
  pin164: ["pin164"],
  pin165: ["pin165"],
  pin166: ["pin166"],
  pin167: ["pin167"],
  pin168: ["pin168"],
  pin169: ["pin169"],
  pin170: ["pin170"],
  pin171: ["pin171"],
  pin172: ["pin172"],
  pin173: ["pin173"],
  pin174: ["pin174"],
  pin175: ["pin175"],
  pin176: ["pin176"],
  pin177: ["pin177"],
  pin178: ["pin178"],
  pin179: ["pin179"],
  pin180: ["pin180"],
  pin181: ["pin181"],
  pin182: ["pin182"],
  pin183: ["pin183"],
  pin184: ["pin184"],
  pin185: ["pin185"],
  pin186: ["pin186"],
  pin187: ["pin187"],
  pin188: ["pin188"],
  pin189: ["pin189"],
  pin190: ["pin190"],
  pin191: ["pin191"],
  pin192: ["pin192"],
  pin193: ["pin193"],
  pin194: ["pin194"],
  pin195: ["pin195"],
  pin196: ["pin196"],
  pin197: ["pin197"],
  pin198: ["pin198"],
  pin199: ["pin199"],
  pin200: ["pin200"],
  pin201: ["pin201"],
  pin202: ["pin202"],
  pin203: ["pin203"],
  pin204: ["pin204"],
  pin205: ["pin205"],
  pin206: ["pin206"],
  pin207: ["pin207"],
  pin208: ["pin208"]
} as const

export const LPC1788FBD208K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C691535"
  ]
}}
      manufacturerPartNumber="LPC1788FBD208K"
      footprint={<footprint>
        <smtpad portHints={["pin208"]} pcbX="-14.579853999999997mm" pcbY="-12.750038000000004mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin207"]} pcbX="-14.579853999999997mm" pcbY="-12.249912000000009mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin206"]} pcbX="-14.579853999999997mm" pcbY="-11.750039999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin205"]} pcbX="-14.579853999999997mm" pcbY="-11.24991399999999mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin204"]} pcbX="-14.579853999999997mm" pcbY="-10.750041999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin203"]} pcbX="-14.579853999999997mm" pcbY="-10.249915999999999mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin202"]} pcbX="-14.579853999999997mm" pcbY="-9.750044000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin201"]} pcbX="-14.579853999999997mm" pcbY="-9.249917999999994mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin200"]} pcbX="-14.579853999999997mm" pcbY="-8.750045999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin199"]} pcbX="-14.579853999999997mm" pcbY="-8.249920000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin198"]} pcbX="-14.579853999999997mm" pcbY="-7.7500479999999925mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin197"]} pcbX="-14.579853999999997mm" pcbY="-7.249922000000012mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin196"]} pcbX="-14.579853999999997mm" pcbY="-6.750050000000002mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin195"]} pcbX="-14.579853999999997mm" pcbY="-6.249923999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin194"]} pcbX="-14.579853999999997mm" pcbY="-5.750051999999997mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin193"]} pcbX="-14.579853999999997mm" pcbY="-5.249925999999988mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin192"]} pcbX="-14.579853999999997mm" pcbY="-4.750054000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin191"]} pcbX="-14.579853999999997mm" pcbY="-4.249927999999997mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin190"]} pcbX="-14.579853999999997mm" pcbY="-3.7500560000000007mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin189"]} pcbX="-14.579853999999997mm" pcbY="-3.249930000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin188"]} pcbX="-14.579853999999997mm" pcbY="-2.7500579999999957mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin187"]} pcbX="-14.579853999999997mm" pcbY="-2.249932000000001mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin186"]} pcbX="-14.579853999999997mm" pcbY="-1.7500599999999906mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin185"]} pcbX="-14.579853999999997mm" pcbY="-1.249933999999996mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin184"]} pcbX="-14.579853999999997mm" pcbY="-0.7500619999999856mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin183"]} pcbX="-14.579853999999997mm" pcbY="-0.24993599999999105mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin182"]} pcbX="-14.579853999999997mm" pcbY="0.24993599999999105mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin181"]} pcbX="-14.579853999999997mm" pcbY="0.7500619999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin180"]} pcbX="-14.579853999999997mm" pcbY="1.249933999999996mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin179"]} pcbX="-14.579853999999997mm" pcbY="1.7500599999999906mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin178"]} pcbX="-14.579853999999997mm" pcbY="2.249932000000001mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin177"]} pcbX="-14.579853999999997mm" pcbY="2.7500579999999957mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin176"]} pcbX="-14.579853999999997mm" pcbY="3.249930000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin175"]} pcbX="-14.579853999999997mm" pcbY="3.750056000000015mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin174"]} pcbX="-14.579853999999997mm" pcbY="4.249928000000011mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin173"]} pcbX="-14.579853999999997mm" pcbY="4.750054000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin172"]} pcbX="-14.579853999999997mm" pcbY="5.249925999999988mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin171"]} pcbX="-14.579853999999997mm" pcbY="5.750051999999997mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin170"]} pcbX="-14.579853999999997mm" pcbY="6.249923999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin169"]} pcbX="-14.579853999999997mm" pcbY="6.750050000000002mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin168"]} pcbX="-14.579853999999997mm" pcbY="7.249922000000012mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin167"]} pcbX="-14.579853999999997mm" pcbY="7.7500479999999925mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin166"]} pcbX="-14.579853999999997mm" pcbY="8.249920000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin165"]} pcbX="-14.579853999999997mm" pcbY="8.750046000000012mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin164"]} pcbX="-14.579853999999997mm" pcbY="9.249917999999994mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin163"]} pcbX="-14.579853999999997mm" pcbY="9.750044000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin162"]} pcbX="-14.579853999999997mm" pcbY="10.249915999999999mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin161"]} pcbX="-14.579853999999997mm" pcbY="10.750041999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin160"]} pcbX="-14.579853999999997mm" pcbY="11.249914000000004mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin159"]} pcbX="-14.579853999999997mm" pcbY="11.750039999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin158"]} pcbX="-14.579853999999997mm" pcbY="12.249912000000009mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin157"]} pcbX="-14.579853999999997mm" pcbY="12.75003800000001mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin156"]} pcbX="-12.75003799999999mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin155"]} pcbX="-12.249911999999995mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin154"]} pcbX="-11.750039999999984mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin153"]} pcbX="-11.24991399999999mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin152"]} pcbX="-10.75004199999998mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin151"]} pcbX="-10.249915999999985mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin150"]} pcbX="-9.750043999999988mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin149"]} pcbX="-9.24991799999998mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin148"]} pcbX="-8.750045999999998mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin147"]} pcbX="-8.249919999999989mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin146"]} pcbX="-7.7500479999999925mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin145"]} pcbX="-7.249921999999998mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin144"]} pcbX="-6.7500499999999874mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin143"]} pcbX="-6.249923999999993mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin142"]} pcbX="-5.750051999999982mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin141"]} pcbX="-5.249925999999974mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin140"]} pcbX="-4.750053999999992mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin139"]} pcbX="-4.249927999999997mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin138"]} pcbX="-3.7500560000000007mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin137"]} pcbX="-3.249929999999992mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin136"]} pcbX="-2.7500579999999815mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin135"]} pcbX="-2.249931999999987mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin134"]} pcbX="-1.7500599999999764mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin133"]} pcbX="-1.249933999999996mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin132"]} pcbX="-0.7500619999999856mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin131"]} pcbX="-0.24993599999997684mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin130"]} pcbX="0.24993600000000527mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin129"]} pcbX="0.7500619999999998mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin128"]} pcbX="1.2499340000000103mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin127"]} pcbX="1.7500600000000048mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin126"]} pcbX="2.2499320000000154mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin125"]} pcbX="2.750058000000024mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin124"]} pcbX="3.249930000000006mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin123"]} pcbX="3.750056000000015mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin122"]} pcbX="4.2499280000000255mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin121"]} pcbX="4.75005400000002mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin120"]} pcbX="5.249926000000002mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin119"]} pcbX="5.750052000000011mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin118"]} pcbX="6.249923999999993mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin117"]} pcbX="6.750050000000016mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin116"]} pcbX="7.249922000000012mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin115"]} pcbX="7.750048000000007mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin114"]} pcbX="8.249920000000017mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin113"]} pcbX="8.750046000000012mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin112"]} pcbX="9.249918000000008mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin111"]} pcbX="9.750044000000031mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin110"]} pcbX="10.249916000000013mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin109"]} pcbX="10.750041999999993mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin108"]} pcbX="11.249914000000004mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin107"]} pcbX="11.750040000000013mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin106"]} pcbX="12.249912000000009mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin105"]} pcbX="12.750038000000018mm" pcbY="14.579854000000005mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin104"]} pcbX="14.579854000000012mm" pcbY="12.75003800000001mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin103"]} pcbX="14.579854000000012mm" pcbY="12.249912000000009mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin102"]} pcbX="14.579854000000012mm" pcbY="11.750039999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin101"]} pcbX="14.579854000000012mm" pcbY="11.249914000000004mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin100"]} pcbX="14.579854000000012mm" pcbY="10.750041999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin99"]} pcbX="14.579854000000012mm" pcbY="10.249915999999999mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin98"]} pcbX="14.579854000000012mm" pcbY="9.750044000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin97"]} pcbX="14.579854000000012mm" pcbY="9.249917999999994mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin96"]} pcbX="14.579854000000012mm" pcbY="8.750046000000012mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin95"]} pcbX="14.579854000000012mm" pcbY="8.249920000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin94"]} pcbX="14.579854000000012mm" pcbY="7.7500479999999925mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin93"]} pcbX="14.579854000000012mm" pcbY="7.249922000000012mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin92"]} pcbX="14.579854000000012mm" pcbY="6.750050000000002mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin91"]} pcbX="14.579854000000012mm" pcbY="6.249923999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin90"]} pcbX="14.579854000000012mm" pcbY="5.750051999999997mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin89"]} pcbX="14.579854000000012mm" pcbY="5.249925999999988mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin88"]} pcbX="14.579854000000012mm" pcbY="4.750054000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin87"]} pcbX="14.579854000000012mm" pcbY="4.249928000000011mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin86"]} pcbX="14.579854000000012mm" pcbY="3.750056000000015mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin85"]} pcbX="14.579854000000012mm" pcbY="3.249930000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin84"]} pcbX="14.579854000000012mm" pcbY="2.7500579999999957mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin83"]} pcbX="14.579854000000012mm" pcbY="2.249932000000001mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin82"]} pcbX="14.579854000000012mm" pcbY="1.7500599999999906mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin81"]} pcbX="14.579854000000012mm" pcbY="1.249933999999996mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin80"]} pcbX="14.579854000000012mm" pcbY="0.7500619999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin79"]} pcbX="14.579854000000012mm" pcbY="0.24993599999999105mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin78"]} pcbX="14.579854000000012mm" pcbY="-0.24993599999999105mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin77"]} pcbX="14.579854000000012mm" pcbY="-0.7500619999999856mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin76"]} pcbX="14.579854000000012mm" pcbY="-1.249933999999996mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin75"]} pcbX="14.579854000000012mm" pcbY="-1.7500599999999906mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin74"]} pcbX="14.579854000000012mm" pcbY="-2.249932000000001mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin73"]} pcbX="14.579854000000012mm" pcbY="-2.7500579999999957mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin72"]} pcbX="14.579854000000012mm" pcbY="-3.249930000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin71"]} pcbX="14.579854000000012mm" pcbY="-3.7500560000000007mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin70"]} pcbX="14.579854000000012mm" pcbY="-4.249927999999997mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin69"]} pcbX="14.579854000000012mm" pcbY="-4.750054000000006mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin68"]} pcbX="14.579854000000012mm" pcbY="-5.249925999999988mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin67"]} pcbX="14.579854000000012mm" pcbY="-5.750051999999997mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin66"]} pcbX="14.579854000000012mm" pcbY="-6.249923999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin65"]} pcbX="14.579854000000012mm" pcbY="-6.750050000000002mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="14.579854000000012mm" pcbY="-7.249922000000012mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="14.579854000000012mm" pcbY="-7.7500479999999925mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="14.579854000000012mm" pcbY="-8.249920000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="14.579854000000012mm" pcbY="-8.750045999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="14.579854000000012mm" pcbY="-9.249917999999994mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="14.579854000000012mm" pcbY="-9.750044000000003mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="14.579854000000012mm" pcbY="-10.249915999999999mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="14.579854000000012mm" pcbY="-10.750041999999993mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="14.579854000000012mm" pcbY="-11.24991399999999mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="14.579854000000012mm" pcbY="-11.750039999999998mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="14.579854000000012mm" pcbY="-12.249912000000009mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="14.579854000000012mm" pcbY="-12.750038000000004mm" width="1.6699991999999997mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="12.750038000000018mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="12.249912000000009mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="11.750040000000013mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="11.249914000000004mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="10.750041999999993mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="10.249916000000013mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="9.750044000000031mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="9.249918000000008mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="8.750046000000012mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="8.249920000000017mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="7.750048000000007mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="7.249922000000012mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="6.750050000000016mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="6.249923999999993mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="5.750052000000011mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="5.249926000000002mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="4.75005400000002mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="4.2499280000000255mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="3.750056000000015mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="3.249930000000006mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="2.750058000000024mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="2.2499320000000154mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="1.7500600000000048mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="1.2499340000000103mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="0.7500619999999998mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="0.24993600000000527mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-0.24993599999997684mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-0.7500619999999856mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.249933999999996mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.7500599999999764mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-2.249931999999987mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-2.7500579999999815mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-3.249929999999992mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-3.7500560000000007mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-4.249927999999997mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-4.750053999999992mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-5.249925999999974mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-5.750051999999982mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-6.249923999999993mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-6.7500499999999874mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-7.249921999999998mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-7.7500479999999925mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-8.249919999999989mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-8.750045999999998mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-9.24991799999998mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-9.750043999999988mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-10.249915999999985mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-10.75004199999998mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-11.24991399999999mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-11.750039999999984mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-12.249911999999995mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-12.75003799999999mm" pcbY="-14.579853999999997mm" width="0.2800096mm" height="1.6699991999999997mm" shape="rect" />
<silkscreenpath route={[{"x":-14.47799999999998,"y":-13.207999999999998},{"x":-14.47799999999998,"y":-13.207999999999998},{"x":-14.47799999999998,"y":-14.477999999999994},{"x":-13.207999999999998,"y":-14.477999999999994},{"x":-13.207999999999998,"y":-14.477999999999994}]} />
<silkscreenpath route={[{"x":-13.04236659999998,"y":-14.076172000000014},{"x":-14.076172,"y":-14.076172000000014},{"x":-14.076172,"y":-13.042366599999994}]} />
<silkscreenpath route={[{"x":-13.04236659999998,"y":14.076172},{"x":-14.076172,"y":14.076172},{"x":-14.076172,"y":13.042366600000001}]} />
<silkscreenpath route={[{"x":13.042366600000008,"y":14.076172},{"x":14.076172000000014,"y":14.076172},{"x":14.076172000000014,"y":13.042366600000001}]} />
<silkscreenpath route={[{"x":13.042366600000008,"y":-14.076172000000014},{"x":14.076172000000014,"y":-14.076172000000014},{"x":14.076172000000014,"y":-13.042366599999994}]} />
<silkscreenpath route={[{"x":-13.4401814,"y":-13.440181400000014},{"x":-13.4401814,"y":13.4401814},{"x":13.440181400000029,"y":13.4401814},{"x":13.440181400000029,"y":-13.440181400000014},{"x":-13.4401814,"y":-13.440181400000014}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=7c5bfc443fc442c09858e27d1e1efec4&pn=C691535",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.4210854715202004e-14, y: 0, z: -14.614853600000004 },
      }}
      {...props}
    />
  )
}