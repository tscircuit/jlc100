# jlc100

A tscircuit component library and KiCad PCM package for popular JLCPCB components. This library provides ready-to-use components from JLCPCB's top 100 most popular parts in each category.

## Current Status

Work in progress. Currently available categories:

- **Processors** - 30 components (STM32, GD32, CH32V, ATmega, MSP430, etc.)
- **Microcontrollers** - 32 components (RP2040, STM32G/L series, STM8, etc.)

## Target Categories

| Category | Status |
|----------|--------|
| Processors | In progress |
| Microcontrollers | In progress |
| Power Management | Planned |
| Connectors | Planned |
| Optoelectronics | Planned |
| Transistors | Planned |
| IoT/Communication | Planned |
| Sensors | Planned |

## Development

```bash
bun install
bun run dev
bun run build
bun run typecheck
bun run generate:exports   # After adding new components
```

## KiCad Export

```bash
tsci build --kicad-library  # Generate KiCad library
tsci build --kicad-pcm      # Generate KiCad PCM package
```