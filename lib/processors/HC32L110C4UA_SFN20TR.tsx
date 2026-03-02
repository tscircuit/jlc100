import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["VSS"],
  pin5: ["VCAP"],
  pin6: ["VDD"],
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
  pin21: ["PAD"]
} as const

export const HC32L110C4UA_SFN20TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C493491"
  ]
}}
      manufacturerPartNumber="HC32L110C4UA_SFN20TR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.8002270000000635mm" pcbY="-1.5001239999999143mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.4001770000000988mm" pcbY="-1.5001239999999143mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.00012700000013410317mm" pcbY="-1.5001239999999143mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.3999229999999443mm" pcbY="-1.5001239999999143mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.7999730000001364mm" pcbY="-1.5001239999999143mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.4999970000000076mm" pcbY="-0.8000999999999294mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.4999970000000076mm" pcbY="-0.4000499999999647mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.4999970000000076mm" pcbY="1.1368683772161603e-13mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.4999970000000076mm" pcbY="0.39979600000003757mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.4999970000000076mm" pcbY="0.7998460000000023mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.7999730000001364mm" pcbY="1.500124000000028mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.3999229999999443mm" pcbY="1.500124000000028mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.00012700000013410317mm" pcbY="1.500124000000028mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.4001770000000988mm" pcbY="1.500124000000028mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.8002270000000635mm" pcbY="1.500124000000028mm" width="0.19999959999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.4999970000000076mm" pcbY="0.8001000000001568mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-1.4999970000000076mm" pcbY="0.4000499999999647mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.4999970000000076mm" pcbY="0.00025399999992714584mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-1.4999970000000076mm" pcbY="-0.3997959999999239mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-1.4999970000000076mm" pcbY="-0.7998459999998886mm" width="0.7999983999999999mm" height="0.19999959999999997mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.00012700000013410317mm" pcbY="1.1368683772161603e-13mm" width="1.6999966mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":1.5498063999999658,"y":1.5499334000001},{"x":1.5498063999999658,"y":1.1309858000000759}]} />
<silkscreenpath route={[{"x":1.5498063999999658,"y":-1.1312397999998893},{"x":1.5498063999999658,"y":-1.5499333999998726}]} />
<silkscreenpath route={[{"x":-1.5500604000000067,"y":-1.5499333999998726},{"x":-1.5500604000000067,"y":-1.1309857999999622}]} />
<silkscreenpath route={[{"x":-1.5500604000000067,"y":1.1312398000001167},{"x":-1.5500604000000067,"y":1.5499334000001}]} />
<silkscreenpath route={[{"x":-1.5500604000000067,"y":-1.5499333999998726},{"x":-1.1313668000000234,"y":-1.5499333999998726}]} />
<silkscreenpath route={[{"x":1.1311127999999826,"y":-1.5499333999998726},{"x":1.5498063999999658,"y":-1.5499333999998726}]} />
<silkscreenpath route={[{"x":1.5498063999999658,"y":1.5499334000001},{"x":1.1311127999999826,"y":1.5499334000001}]} />
<silkscreenpath route={[{"x":-1.1313668000000234,"y":1.5499334000001},{"x":-1.5500604000000067,"y":1.5499334000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=bc802df3260a41178c5ecc6dc5dbb884&pn=C493491",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0.00012700000013410317, z: -1.1001231999999959 },
      }}
      {...props}
    />
  )
}