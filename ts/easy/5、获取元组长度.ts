type tesla = ["tesla", "model 3", "model X", "model Y"]
type spaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"]

// 可以直接通过length属性获取长度
type Length<raw extends any[]> = raw["length"]

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
