import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["PA1"],
  pin3: ["PA28"],
  pin4: ["NRST"],
  pin5: ["pin5"],
  pin6: ["VDD"],
  pin7: ["VSS"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["PB2"],
  pin15: ["PB3"],
  pin16: ["PA8"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["PA11"],
  pin20: ["PB6"],
  pin21: ["PB7"],
  pin22: ["PB8"],
  pin23: ["PB9"],
  pin24: ["PB14"],
  pin25: ["PB15"],
  pin26: ["PB16"],
  pin27: ["pin27"],
  pin28: ["PA13"],
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
  pin48: ["VCORE"]
} as const

export const MSPM0G3507SPTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C22362630"
  ]
}}
      manufacturerPartNumber="MSPM0G3507SPTR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.7500579999999957mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.2499319999999727mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.7500599999999622mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.249933999999996mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.7500619999999856mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.24993599999999105mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.24993600000001948mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.750062000000014mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.249934000000053mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.750060000000019mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.2499320000000296mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.750058000000024mm" pcbY="-4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.249928000000011mm" pcbY="-2.750058000000003mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.249928000000011mm" pcbY="-2.249932000000001mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.249928000000011mm" pcbY="-1.7500600000000048mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.249928000000011mm" pcbY="-1.2499340000000103mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="4.249928000000011mm" pcbY="-0.7500619999999998mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="4.249928000000011mm" pcbY="-0.24993600000001237mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="4.249928000000011mm" pcbY="0.24993599999999816mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="4.249928000000011mm" pcbY="0.7500619999999856mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="4.249928000000011mm" pcbY="1.249933999999996mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="4.249928000000011mm" pcbY="1.7500599999999977mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="4.249928000000011mm" pcbY="2.249931999999994mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="4.249928000000011mm" pcbY="2.7500579999999957mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.750058000000024mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="2.2499320000000296mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="1.750060000000019mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="1.249934000000053mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="0.750062000000014mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="0.24993600000001948mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.24993599999999105mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-0.7500619999999856mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-1.249933999999996mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-1.7500599999999622mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-2.2499319999999727mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-2.7500579999999957mm" pcbY="4.249927999999997mm" width="0.27000199999999996mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-4.249927999999983mm" pcbY="2.7500579999999957mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-4.249927999999983mm" pcbY="2.249931999999994mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-4.249927999999983mm" pcbY="1.7500599999999977mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-4.249927999999983mm" pcbY="1.249933999999996mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-4.249927999999983mm" pcbY="0.7500619999999856mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-4.249927999999983mm" pcbY="0.24993599999999816mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-4.249927999999983mm" pcbY="-0.24993600000001237mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-4.249927999999983mm" pcbY="-0.7500619999999998mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-4.249927999999983mm" pcbY="-1.2499340000000103mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-4.249927999999983mm" pcbY="-1.7500600000000048mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-4.249927999999983mm" pcbY="-2.249932000000001mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-4.249927999999983mm" pcbY="-2.750058000000003mm" width="1.499997mm" height="0.27000199999999996mm" shape="rect" />
<silkscreenpath route={[{"x":-2.8955999999999733,"y":3.3400999999999925},{"x":3.302000000000021,"y":3.3400999999999925},{"x":3.302000000000021,"y":-3.314700000000002},{"x":-3.327399999999983,"y":-3.314700000000002},{"x":-3.327399999999983,"y":3.3400999999999925},{"x":-2.5653999999999826,"y":3.3400999999999925}]} />
<silkscreenpath route={[{"x":-3.3899855999999886,"y":-4.059986800000004},{"x":-3.5791606142161356,"y":-3.9210693508058796},{"x":-3.506066828896735,"y":-3.698038989101562},{"x":-3.2713643711032603,"y":-3.698038989101562},{"x":-3.1982705857838596,"y":-3.9210693508058796},{"x":-3.3874456000000066,"y":-4.059986800000004}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a4b96ad857dc48c08dab3d0efdf20aec&pn=C22362630",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 2.842170943040401e-14, y: -7.105427357601002e-15, z: -4.199926499999994 },
      }}
      {...props}
    />
  )
}