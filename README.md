# AFTERGLOW

A cinematic, interactive 3D miniature convenience store on a rainy night, built for desktop browsers.

Blender owns editable asset sources, Unity 6 renders the world and runs interactions, and React with TypeScript owns the web interface and browser integrations. Selecting the radio opens a visible YouTube player.

## Project status

Implementation is in progress. This repository is being developed as one integrated project, starting with the foundation and the React–Unity Web bridge. A working Unity build, hosted integration, and finished scene are not yet verified.

## Repository layout

- `apps/web/` — React and TypeScript web application.
- `apps/unity/` — Unity project, runtime interactions, and Web bridge.
- `art/` — Editable Blender sources, exports, and asset provenance.
- `tools/` — Asset production and build helpers.
- `tests/` — Integration and browser acceptance tests.
- `docs/` — Architecture, toolchain, implementation status, and acceptance evidence.

## Development approach

1. Bootstrap the toolchain and repository standards.
2. Verify typed, versioned event exchange between React and an actual Unity Web build.
3. Build and validate the original Blender store blockout and world interactions.
4. Integrate visible YouTube playback with error fallbacks.
5. Continue with atmosphere, utilities, character behavior, and release verification in milestone order.

Setup and build instructions will be added alongside verified implementations. Do not treat source generation or mock adapters as proof that a Unity build or external integration works.

## Product boundaries

The MVP requires no backend, accounts, or OAuth. Unity is the sole 3D runtime. External integrations need mock adapters and usable fallbacks. YouTube playback remains visible and user initiated; the application does not extract audio, bypass ads, or promise complete YouTube Music library access.

## License

Project code and original project assets are available under the [MIT License](LICENSE). Third-party dependencies and assets retain their own licenses; those licenses must be recorded before inclusion. Reference documents and images are not relicensed by this repository.
