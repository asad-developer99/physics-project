# Physics Theory Handbook

A concise theory guide for every topic in the course. Each topic follows the same structure:

1. **Definition**
2. **Key Concepts**
3. **Formulas & Principles**
4. **Example**
5. **Real-World Applications**

## Contents

| # | Section | Topics |
|---|---------|--------|
| 1 | [Quantum](#1-quantum) | 4 |
| 2 | [Thermodynamics](#2-thermodynamics) | 8 |
| 3 | [Optics](#3-optics) | 12 |
| 4 | [Mechanics](#4-mechanics) | 16 |
| 5 | [Electricity](#5-electricity) | 8 |
| 6 | [Magnetism](#6-magnetism) | 9 |

> Constants used: `g = 9.8 m/s²` (or `10 m/s²` where stated), `c = 3×10⁸ m/s`, `h = 6.63×10⁻³⁴ J·s`, `e = 1.6×10⁻¹⁹ C`, `k = 9×10⁹ N·m²/C²`, `ε₀ = 8.85×10⁻¹² F/m`, `μ₀ = 4π×10⁻⁷ T·m/A`.

---

# 1. Quantum

## 1.1 Photoelectric Effect

**1. Definition**
The emission of electrons from a metal surface when light of sufficiently high frequency falls on it. It shows that light behaves as discrete packets of energy called photons.

**2. Key Concepts**
- **Photon:** a quantum of light with energy `E = hf`.
- **Work function (φ):** the minimum energy needed to free an electron from the metal.
- **Threshold frequency (f₀):** the lowest frequency that causes emission, `f₀ = φ/h`.
- **Stopping potential (V₀):** the reverse voltage that stops the fastest photoelectrons.

**3. Formulas & Principles**
- Einstein's equation: `hf = φ + KEmax`
- `KEmax = eV₀`
- `f₀ = φ / h`
- `h` = Planck's constant, `f` = light frequency, `φ` = work function, `e` = electron charge.
- Intensity changes the *number* of electrons, not their maximum energy.

**4. Example**
Light of wavelength 300 nm falls on a metal with φ = 2.0 eV. Photon energy = 1240/300 ≈ 4.13 eV, so `KEmax = 4.13 − 2.0 ≈ 2.13 eV`.

**5. Real-World Applications**
- Solar cells (photovoltaic panels)
- Automatic doors and light sensors
- Digital camera sensors
- Photomultiplier tubes and night-vision devices

## 1.2 Cathode Rays – The Electrons

**1. Definition**
Cathode rays are streams of negatively charged particles that travel from the cathode to the anode in a low-pressure gas discharge tube. J.J. Thomson showed these particles are electrons, present in all matter.

**2. Key Concepts**
- **Discharge tube:** a glass tube at low pressure with a high voltage across two electrodes.
- **Properties:** they travel in straight lines, are deflected by electric and magnetic fields, and carry negative charge.
- **Specific charge (e/m):** the charge-to-mass ratio of the electron, about `1.76×10¹¹ C/kg`.
- **Crossed fields:** balancing electric and magnetic forces gives the electron's speed.

**3. Formulas & Principles**
- Balanced fields: `eE = evB`, so `v = E/B`
- Circular path in B alone: `r = mv/(eB)`, so `e/m = E/(B²r)`
- Acceleration through V: `eV = ½mv²`

**4. Example**
An electron accelerated through 100 V: `v = √(2eV/m) = √(2 × 1.76×10¹¹ × 100) ≈ 5.9×10⁶ m/s`.

**5. Real-World Applications**
- Old CRT televisions and monitors
- Oscilloscopes
- Electron microscopes
- X-ray tubes

## 1.3 The Bohr Atom

**1. Definition**
Bohr's model describes the hydrogen atom as an electron orbiting the nucleus in fixed, quantized circular orbits. The electron emits or absorbs a photon only when it jumps between orbits.

**2. Key Concepts**
- **Stationary orbits:** the electron does not radiate while in an allowed orbit.
- **Quantized angular momentum:** only certain orbits are allowed.
- **Energy levels:** energy is negative (bound) and gets closer to zero for higher n.
- **Transitions:** photon energy equals the difference between two levels.

**3. Formulas & Principles**
- `L = nħ = nh/2π`
- `rₙ = 0.529 n² Å`
- `Eₙ = −13.6 / n² eV`
- `hf = Eᵢ − E_f`
- `n` = principal quantum number (1, 2, 3, …).

**4. Example**
Transition n = 3 → n = 2: `ΔE = 13.6(1/4 − 1/9) = 1.89 eV`, giving `λ = 1240/1.89 ≈ 656 nm` (red line of hydrogen).

**5. Real-World Applications**
- Atomic emission spectroscopy
- Neon signs and gas-discharge lamps
- Lasers (stimulated transitions between levels)
- Identifying elements in stars

## 1.4 Hydrogen Atom

**1. Definition**
The hydrogen atom is the simplest atom: one proton and one electron. Its discrete spectrum of emitted wavelengths is explained by energy-level transitions.

**2. Key Concepts**
- **Spectral series:** Lyman (n₁=1, UV), Balmer (n₁=2, visible), Paschen (n₁=3, IR).
- **Ground state:** n = 1, energy −13.6 eV.
- **Ionization energy:** 13.6 eV is needed to remove the electron completely.
- **Quantum numbers:** n, l, m, s describe the state of the electron in the full quantum model.

**3. Formulas & Principles**
- Rydberg formula: `1/λ = R (1/n₁² − 1/n₂²)`
- `R = 1.097×10⁷ m⁻¹`, `n₂ > n₁`

**4. Example**
First Lyman line (2 → 1): `1/λ = 1.097×10⁷ × ¾ = 8.23×10⁶ m⁻¹`, so `λ ≈ 121.5 nm` (ultraviolet).

**5. Real-World Applications**
- Astronomy: hydrogen lines reveal star composition and redshift
- 21-cm hydrogen line mapping of galaxies
- Hydrogen masers in atomic clocks
- Fusion and fuel-cell research

---

# 2. Thermodynamics

## 2.1 Introduction

**1. Definition**
Thermodynamics is the study of heat, work, temperature, and energy transfer in physical systems. It describes how thermal energy converts into other forms.

**2. Key Concepts**
- **System and surroundings:** the part under study and everything outside it.
- **State variables:** pressure, volume, temperature, internal energy.
- **Zeroth law:** two systems in equilibrium with a third are in equilibrium with each other (defines temperature).
- **Second law:** heat flows spontaneously from hot to cold; entropy of an isolated system never decreases.

**3. Formulas & Principles**
- First law: `ΔU = Q − W`
- `Q` = heat added to the system, `W` = work done by the system, `ΔU` = change in internal energy.
- Heat engine efficiency: `η = W/Q_hot = 1 − T_cold/T_hot` (Carnot limit).

**4. Example**
A gas absorbs 500 J of heat and does 200 J of work: `ΔU = 500 − 200 = 300 J`.

**5. Real-World Applications**
- Car and jet engines
- Refrigerators and air conditioners
- Power plants
- Heat pumps

## 2.2 Pressure

**1. Definition**
Pressure is the force acting perpendicular to a surface per unit area. In fluids, it acts equally in all directions at a given depth.

**2. Key Concepts**
- **Unit:** pascal (Pa = N/m²); 1 atm ≈ 1.013×10⁵ Pa.
- **Hydrostatic pressure:** increases with depth and fluid density.
- **Gauge vs absolute pressure:** gauge pressure is measured relative to the atmosphere.
- **Depends on area:** the same force on a smaller area gives higher pressure.

**3. Formulas & Principles**
- `P = F / A`
- `P = P₀ + ρgh`
- `ρ` = fluid density, `h` = depth, `P₀` = surface pressure.

**4. Example**
Gauge pressure at 10 m depth in water: `ρgh = 1000 × 9.8 × 10 = 9.8×10⁴ Pa` (about 1 atm).

**5. Real-World Applications**
- Dams are thicker at the base
- Tyre pressure and blood pressure measurement
- Knives and nails (small area, large pressure)
- Scuba diving depth limits

## 2.3 Buoyant Force

**1. Definition**
Buoyant force is the upward force a fluid exerts on an object immersed in it. By Archimedes' principle, it equals the weight of the fluid displaced.

**2. Key Concepts**
- **Archimedes' principle:** buoyant force = weight of displaced fluid.
- **Floating:** an object floats when its average density is less than the fluid's.
- **Sinking:** an object sinks when its average density is greater.
- **Apparent weight:** weight in fluid = true weight − buoyant force.

**3. Formulas & Principles**
- `F_b = ρ_fluid × V_displaced × g`
- Floating condition: `F_b = W`

**4. Example**
A 0.002 m³ block fully submerged in water: `F_b = 1000 × 0.002 × 9.8 = 19.6 N`.

**5. Real-World Applications**
- Ships and boats
- Submarines (ballast tanks)
- Hydrometers measuring liquid density
- Life jackets

## 2.4 Pascal's Law

**1. Definition**
A pressure change applied to an enclosed incompressible fluid is transmitted equally and undiminished to every point in the fluid and the container walls.

**2. Key Concepts**
- **Enclosed fluid:** the fluid must be confined and effectively incompressible.
- **Force multiplication:** a small force on a small piston creates a large force on a large piston.
- **Work conservation:** the force gain is paid for by moving the small piston farther.
- **Hydraulic systems:** use liquids to transmit force.

**3. Formulas & Principles**
- `F₁/A₁ = F₂/A₂`
- `F₂ = F₁ × (A₂/A₁)`
- `d₁A₁ = d₂A₂` (volume conservation)

**4. Example**
`A₁ = 0.01 m²`, `A₂ = 0.5 m²`, `F₁ = 200 N`: `F₂ = 200 × 0.5/0.01 = 10,000 N`.

**5. Real-World Applications**
- Hydraulic car lifts and jacks
- Brake systems in vehicles
- Excavators and bulldozers
- Hydraulic presses

## 2.5 Torricelli's Law

**1. Definition**
Torricelli's law gives the speed at which a liquid flows out of a small hole in a tank. It equals the speed of a body falling freely through the height of the liquid above the hole.

**2. Key Concepts**
- **Efflux speed:** depends only on the depth of the hole below the surface.
- **Bernoulli's principle:** the law follows from energy conservation in the fluid.
- **Independent of density:** water and oil leave at the same speed from the same depth.
- **Torricelli barometer:** mercury column height (760 mm) balances atmospheric pressure.

**3. Formulas & Principles**
- `v = √(2gh)`
- `h` = height of liquid surface above the hole.
- Flow rate: `Q = A_hole × v`

**4. Example**
Hole 5 m below the water surface (g = 9.8): `v = √(2 × 9.8 × 5) ≈ 9.9 m/s`.

**5. Real-World Applications**
- Draining of tanks and reservoirs
- Water towers and dam outlets
- Mercury barometers
- Design of fountains and nozzles

## 2.6 Ideal Gas Equation

**1. Definition**
The ideal gas equation relates pressure, volume, temperature, and amount of an ideal gas. It combines Boyle's, Charles's, and Gay-Lussac's laws.

**2. Key Concepts**
- **Ideal gas:** point particles with no intermolecular forces and perfectly elastic collisions.
- **Boyle's law:** `PV` = constant at constant T.
- **Charles's law:** `V/T` = constant at constant P.
- **Absolute temperature:** T must be in kelvin.

**3. Formulas & Principles**
- `PV = nRT`
- `P` = pressure, `V` = volume, `n` = moles, `R = 8.314 J/(mol·K)`, `T` = temperature in K.
- `PV = N k_B T` (N = number of molecules)

**4. Example**
1 mol at 273 K and 101,325 Pa: `V = nRT/P = (8.314 × 273)/101325 = 0.0224 m³ = 22.4 L`.

**5. Real-World Applications**
- Weather balloons and atmospheric science
- Gas cylinders and compressed-air storage
- Internal combustion engines
- Breathing and lung physiology

## 2.7 Kinetic Theory of Gases

**1. Definition**
The kinetic theory explains gas properties such as pressure and temperature through the random motion of its molecules. Pressure comes from molecular collisions with the container walls.

**2. Key Concepts**
- **Random motion:** molecules move constantly in all directions.
- **Temperature:** a measure of average kinetic energy.
- **RMS speed:** a typical molecular speed, higher at higher T and for lighter gases.
- **Degrees of freedom:** the ways a molecule can store energy.

**3. Formulas & Principles**
- `P = ⅓ ρ v_rms²`
- Average KE per molecule: `KE = (3/2) k_B T`
- `v_rms = √(3RT/M)`
- `M` = molar mass in kg/mol.

**4. Example**
Oxygen (M = 0.032 kg/mol) at 300 K: `v_rms = √(3 × 8.314 × 300 / 0.032) ≈ 484 m/s`.

**5. Real-World Applications**
- Explaining why helium escapes Earth's atmosphere
- Gas diffusion and effusion (isotope separation)
- Design of vacuum systems
- Understanding atmospheric pressure and temperature

## 2.8 Hot Air Balloon

**1. Definition**
A hot air balloon rises because the air inside is heated and becomes less dense than the surrounding air. The resulting buoyant force lifts the balloon and its load.

**2. Key Concepts**
- **Density difference:** hot air is less dense than cool air at the same pressure.
- **Archimedes' principle:** lift equals weight of displaced cool air minus weight of the hot air inside.
- **Control:** the burner changes the inside temperature to climb or descend.
- **Gas density:** `ρ = PM/(RT)`, so a higher T gives a lower ρ.

**3. Formulas & Principles**
- Net lift: `F = (ρ_out − ρ_in) V g`
- Payload mass supported: `m = (ρ_out − ρ_in) V − m_balloon`

**4. Example**
`V = 2000 m³`, `ρ_out = 1.2`, `ρ_in = 0.9 kg/m³`: lift = `0.3 × 2000 × 9.8 = 5880 N`, enough for about 600 kg of balloon plus load.

**5. Real-World Applications**
- Recreational and tourist ballooning
- Scientific and weather balloons
- Airships (lighter-than-air craft)
- Demonstrations of buoyancy and gas laws in teaching

---

# 3. Optics

## 3.1 Compound Microscope

**1. Definition**
An optical instrument with two converging lenses, an objective and an eyepiece, that produces a highly magnified image of tiny nearby objects.

**2. Key Concepts**
- **Objective lens:** short focal length; forms a real, inverted, magnified image.
- **Eyepiece:** acts as a magnifier on that image, giving a final virtual image.
- **Tube length (L):** distance between the two lenses.
- **Near point (D):** 25 cm, the closest comfortable viewing distance.

**3. Formulas & Principles**
- `M = m_o × m_e`
- Final image at near point: `M = (L/f_o)(1 + D/f_e)`
- Final image at infinity: `M = (L/f_o)(D/f_e)`

**4. Example**
`f_o = 1 cm`, `f_e = 5 cm`, `L = 15 cm`, `D = 25 cm`: `M = (15/1)(1 + 25/5) = 90`.

**5. Real-World Applications**
- Biology and medical laboratories
- Forensic analysis
- Semiconductor and materials inspection
- Education and research

## 3.2 Astronomical Telescope

**1. Definition**
An instrument that uses an objective lens of long focal length and an eyepiece of short focal length to view distant celestial objects as larger and brighter.

**2. Key Concepts**
- **Objective:** large aperture to collect more light.
- **Eyepiece:** magnifies the image formed by the objective.
- **Normal adjustment:** final image formed at infinity for relaxed viewing.
- **Angular magnification:** the ratio of image angle to object angle.

**3. Formulas & Principles**
- `M = f_o / f_e` (normal adjustment)
- Tube length: `L = f_o + f_e`
- Near-point viewing: `M = (f_o/f_e)(1 + f_e/D)`

**4. Example**
`f_o = 100 cm`, `f_e = 5 cm`: `M = 20`, `L = 105 cm`.

**5. Real-World Applications**
- Astronomy and planetary observation
- Space telescopes
- Binoculars and spotting scopes
- Satellite tracking

## 3.3 Converging Lens

**1. Definition**
    A lens thicker at the center than at the edges (convex) that bends parallel light rays together to meet at a focal point.

**2. Key Concepts**
- **Focal length (f):** distance from the lens to the focus; positive for a converging lens.
- **Image types:** real and inverted when the object is beyond f; virtual and erect when inside f.
- **Power:** a stronger lens has a shorter focal length.
- **Principal rays:** parallel, central, and focal rays locate the image.

**3. Formulas & Principles**
- Lens formula: `1/v − 1/u = 1/f` (Cartesian sign convention)
- Magnification: `m = v/u`
- Power: `P = 1/f` (f in m, P in dioptres)

**4. Example**
`f = +10 cm`, `u = −30 cm`: `1/v = 1/10 − 1/30 = 1/15`, so `v = 15 cm`, `m = −0.5` (real, inverted, half size).

**5. Real-World Applications**
- Cameras and projectors
- Magnifying glasses
- Spectacles for hypermetropia
- Microscopes and telescopes

## 3.4 Diverging Lens

**1. Definition**
A lens thinner at the center than at the edges (concave) that spreads parallel rays so they appear to come from a focal point on the incident side.

**2. Key Concepts**
- **Negative focal length:** `f < 0`.
- **Image:** always virtual, erect, and diminished for a real object.
- **Location:** image forms between the lens and the focal point.
- **Negative power:** measured in negative dioptres.

**3. Formulas & Principles**
- `1/v − 1/u = 1/f`
- `m = v/u` (between 0 and 1)
- `P = 1/f`

**4. Example**
`f = −20 cm`, `u = −30 cm`: `1/v = −1/20 − 1/30 = −1/12`, so `v = −12 cm`, `m = +0.4` (virtual, erect, smaller).

**5. Real-World Applications**
- Spectacles for myopia (short-sightedness)
- Door peepholes
- Laser beam expanders
- Combined with convex lenses in camera lens systems

## 3.5 Converging Mirror

**1. Definition**
A concave mirror, whose reflecting surface curves inward, that brings parallel rays to a real focus in front of it.

**2. Key Concepts**
- **Focal length:** `f = R/2`, where R is the radius of curvature.
- **Real images:** formed when the object is beyond the focus (inverted).
- **Virtual image:** when the object is inside the focus, the image is enlarged and erect.
- **Centre of curvature (C):** an object at C gives an image at C, same size.

**3. Formulas & Principles**
- Mirror formula: `1/v + 1/u = 1/f`
- Magnification: `m = −v/u`
- `f = R/2` (negative for a concave mirror in Cartesian convention)

**4. Example**
`f = −15 cm`, `u = −30 cm`: `1/v = −1/15 + 1/30 = −1/30`, so `v = −30 cm`, `m = −1` (real, inverted, same size).

**5. Real-World Applications**
- Shaving and makeup mirrors
- Car headlights and torches
- Dental mirrors
- Solar concentrators and reflecting telescopes

## 3.6 Diverging Mirror

**1. Definition**
    A convex mirror, whose reflecting surface bulges outward, that spreads parallel rays so they appear to come from a point behind the mirror.

**2. Key Concepts**
- **Positive focal length:** `f = R/2 > 0` in Cartesian convention.
- **Image:** always virtual, erect, and diminished.
- **Wide field of view:** it shows a large area in a small image.
- **Image position:** always behind the mirror between P and F.

**3. Formulas & Principles**
- `1/v + 1/u = 1/f`
- `m = −v/u`

**4. Example**
`f = +10 cm`, `u = −20 cm`: `1/v = 1/10 + 1/20 = 3/20`, so `v ≈ 6.7 cm`, `m ≈ +0.33`.

**5. Real-World Applications**
- Vehicle rear-view and side mirrors
- Security mirrors in shops
- Road-corner safety mirrors
- Mirrors in parking garages

## 3.7 Reflection of Light

**1. Definition**
The bouncing back of light when it strikes a surface and returns into the same medium.

**2. Key Concepts**
- **Normal:** the perpendicular to the surface at the point of incidence.
- **Regular reflection:** from smooth surfaces, giving clear images.
- **Diffuse reflection:** from rough surfaces, scattering light in all directions.
- **Plane mirror image:** virtual, erect, laterally inverted, same size and as far behind as the object is in front.

**3. Formulas & Principles**
- Law 1: angle of incidence = angle of reflection, `∠i = ∠r`.
- Law 2: incident ray, reflected ray, and normal lie in the same plane.
- Rotating a mirror by θ rotates the reflected ray by `2θ`.

**4. Example**
A ray strikes a mirror at 60° to the normal: it reflects at 60°, so the total deviation is `180° − 2×60° = 60°`.

**5. Real-World Applications**
- Mirrors and periscopes
- Optical fibres (total internal reflection)
- Retroreflectors on roads and bicycles
- Reflecting telescopes

## 3.8 Refraction of Light

**1. Definition**
The change in direction of light when it passes from one transparent medium to another because its speed changes.

**2. Key Concepts**
- **Refractive index:** `n = c/v`; higher n means slower light.
- **Bending:** towards the normal in a denser medium, away in a rarer medium.
- **Total internal reflection:** occurs when light goes from denser to rarer and exceeds the critical angle.
- **Frequency stays constant:** speed and wavelength change.

**3. Formulas & Principles**
- Snell's law: `n₁ sin θ₁ = n₂ sin θ₂`
- Critical angle: `sin θ_c = n₂/n₁` (rarer/denser)
- Apparent depth: `real depth / n`

**4. Example**
Air to glass (n = 1.5), θ₁ = 30°: `sin θ₂ = 0.5/1.5 = 0.333`, so `θ₂ ≈ 19.5°`.

**5. Real-World Applications**
- Eyeglasses, cameras, and lenses
- Optical fibres
- Prisms and rainbows
- Mirages and apparent depth of water

## 3.9 Light as Rays and Waves

**1. Definition**
Light can be modeled as straight-line rays (ray optics) or as an electromagnetic wave (wave optics). The model used depends on the size of the objects compared with the wavelength.

**2. Key Concepts**
- **Ray optics:** explains reflection, refraction, and image formation when sizes are much larger than λ.
- **Wave optics:** explains interference, diffraction, and polarization.
- **Wave–particle duality:** light also behaves as photons (photoelectric effect).
- **Visible range:** about 400 nm to 700 nm.

**3. Formulas & Principles**
- `c = fλ`
- `E = hf`
- `n = c/v`
- `λ_medium = λ_vacuum / n`

**4. Example**
Green light with λ = 550 nm: `f = 3×10⁸ / 550×10⁻⁹ ≈ 5.45×10¹⁴ Hz`.

**5. Real-World Applications**
- Lens design (ray optics)
- Holography and diffraction gratings (wave optics)
- Polarized sunglasses and LCD screens
- Fibre-optic communication

## 3.10 Understanding Waves

**1. Definition**
A wave is a disturbance that transfers energy from one point to another through a medium or space without transporting matter.

**2. Key Concepts**
- **Transverse vs longitudinal:** particle motion perpendicular vs parallel to wave travel.
- **Amplitude, wavelength, frequency:** size, spatial period, and number of cycles per second.
- **Speed:** depends on the medium.
- **Superposition:** overlapping waves add together.

**3. Formulas & Principles**
- `v = fλ`
- `T = 1/f`
- Wave equation: `y = A sin(kx − ωt)`, with `k = 2π/λ`, `ω = 2πf`

**4. Example**
`f = 50 Hz`, `λ = 4 m`: `v = 50 × 4 = 200 m/s`.

**5. Real-World Applications**
- Sound and music
- Radio, TV, and mobile communication
- Ultrasound imaging
- Seismology (earthquake waves)

## 3.11 Interference

**1. Definition**
The redistribution of energy when two or more coherent waves overlap, giving regions of reinforcement and cancellation.

**2. Key Concepts**
- **Coherence:** sources must keep a constant phase difference.
- **Constructive interference:** crest meets crest, giving maximum intensity.
- **Destructive interference:** crest meets trough, giving minimum or zero intensity.
- **Path difference:** determines the type of interference.

**3. Formulas & Principles**
- Constructive: path difference `= nλ`, phase difference `= 2nπ`
- Destructive: path difference `= (n + ½)λ`
- Intensity: `I = I₁ + I₂ + 2√(I₁I₂) cos φ`

**4. Example**
For λ = 500 nm and a path difference of 1250 nm (= 2.5λ), the interference is destructive.

**5. Real-World Applications**
- Anti-reflection coatings on lenses
- Noise-cancelling headphones
- Thin-film colors (soap bubbles, oil films)
- Interferometers (e.g., LIGO)

## 3.12 Young's Double Slit Experiment

**1. Definition**
An experiment in which light passes through two closely spaced slits and forms alternating bright and dark fringes on a screen, demonstrating the wave nature of light.

**2. Key Concepts**
- **Coherent sources:** both slits are lit by the same source.
- **Fringe pattern:** equally spaced bright and dark bands.
- **Fringe width (β):** distance between adjacent bright (or dark) fringes.
- **Effect of wavelength:** red light gives wider fringes than blue.

**3. Formulas & Principles**
- Fringe width: `β = λD / d`
- Bright fringe: `y_n = nλD / d`
- Dark fringe: `y_n = (n + ½)λD / d`
- `D` = slit-to-screen distance, `d` = slit separation.

**4. Example**
`λ = 600 nm`, `D = 1 m`, `d = 0.5 mm`: `β = (600×10⁻⁹ × 1)/(0.5×10⁻³) = 1.2 mm`.

**5. Real-World Applications**
- Measuring wavelength of light
- Verifying wave–particle duality with electrons
- Interferometry and precision metrology
- Foundation for diffraction gratings and spectrometers

---

# 4. Mechanics

## 4.1 Circular Motion

**1. Definition**
Motion of an object along a circular path. Even at constant speed, the velocity changes direction, so there is always acceleration toward the center.

**2. Key Concepts**
- **Centripetal acceleration:** directed toward the center.
- **Centripetal force:** the net inward force required (tension, friction, gravity, etc.).
- **Angular velocity (ω):** rate of change of angle.
- **Period and frequency:** `T = 2π/ω`, `f = 1/T`.

**3. Formulas & Principles**
- `v = ωr`
- `a_c = v²/r = ω²r`
- `F_c = mv²/r = mω²r`

**4. Example**
`m = 0.5 kg`, `r = 2 m`, `v = 4 m/s`: `F = 0.5 × 16 / 2 = 4 N`.

**5. Real-World Applications**
- Cars turning on curves
- Satellites and planets in orbit
- Centrifuges and washing machines
- Roller-coaster loops

## 4.2 Projectile Motion

**1. Definition**
The motion of an object thrown into the air and moving under gravity alone. It follows a parabolic path.

**2. Key Concepts**
- **Independent components:** horizontal velocity is constant; vertical motion has acceleration g.
- **Time of flight, range, and maximum height.**
- **Maximum range:** occurs at a 45° launch angle (same level).
- **Complementary angles:** θ and 90° − θ give the same range.

**3. Formulas & Principles**
- `T = 2u sinθ / g`
- `H = u² sin²θ / 2g`
- `R = u² sin2θ / g`

**4. Example**
`u = 20 m/s`, `θ = 30°`, `g = 10`: `T = 2 s`, `H = 5 m`, `R ≈ 34.6 m`.

**5. Real-World Applications**
- Sports (football, javelin, basketball)
- Artillery and ballistics
- Water fountains
- Stunt jumps and motorcycle launches

## 4.3 Banking on a Road

**1. Definition**
Banking is tilting a curved road inward so a component of the normal force supplies part of the centripetal force, reducing the reliance on friction.

**2. Key Concepts**
- **Banking angle (θ):** the tilt of the road surface.
- **Ideal speed:** the speed at which no friction is needed.
- **Friction:** extends the safe speed range.
- **Safety:** reduces skidding and tyre wear.

**3. Formulas & Principles**
- No friction: `tan θ = v² / (rg)`
- Maximum safe speed: `v_max = √[ rg (μ + tanθ) / (1 − μ tanθ) ]`

**4. Example**
`v = 15 m/s`, `r = 50 m`, `g = 10`: `tan θ = 225/500 = 0.45`, so `θ ≈ 24°`.

**5. Real-World Applications**
- Highway curves and expressway ramps
- Race tracks and velodromes
- Railway curves (raised outer rail)
- Aircraft banking in turns

## 4.4 Motion in a Straight Line

**1. Definition**
Motion along a single axis, described by position, displacement, velocity, and acceleration.

**2. Key Concepts**
- **Displacement vs distance:** displacement is a vector from start to end.
- **Velocity and speed:** rate of change of displacement vs distance.
- **Acceleration:** rate of change of velocity.
- **Graphs:** slope of x–t gives velocity; slope of v–t gives acceleration; area under v–t gives displacement.

**3. Formulas & Principles** (constant acceleration)
- `v = u + at`
- `s = ut + ½at²`
- `v² = u² + 2as`

**4. Example**
Starting from rest with `a = 2 m/s²` for 5 s: `v = 10 m/s`, `s = ½ × 2 × 25 = 25 m`.

**5. Real-World Applications**
- Vehicle braking distance calculations
- Free fall and dropped objects
- Elevator and train motion
- Traffic and road-safety engineering

## 4.5 Motion in a Plane

**1. Definition**
Motion in two dimensions, analyzed by splitting position, velocity, and acceleration into independent x and y components.

**2. Key Concepts**
- **Position vector:** `r = x î + y ĵ`.
- **Independence of components:** x and y motions can be treated separately.
- **Relative velocity:** velocity of one object as seen from another.
- **Special cases:** projectile and circular motion.

**3. Formulas & Principles**
- `v = dr/dt`, `a = dv/dt`
- Constant acceleration: `r = r₀ + ut + ½at²`
- Speed: `|v| = √(vₓ² + v_y²)`

**4. Example**
`v = (3î + 4ĵ) m/s`: speed `= 5 m/s`, direction `= tan⁻¹(4/3) ≈ 53°` from the x-axis.

**5. Real-World Applications**
- Navigation of boats in river currents
- Aircraft flying in wind
- Robot and drone path planning
- Video-game physics

## 4.6 Vector Display

**1. Definition**
Vectors are quantities with both magnitude and direction. A vector is displayed graphically as an arrow whose length shows magnitude and whose orientation shows direction.

**2. Key Concepts**
- **Scalar vs vector:** mass and speed are scalars; force and velocity are vectors.
- **Components:** a vector can be resolved along perpendicular axes.
- **Unit vectors:** `î, ĵ, k̂` give direction with unit magnitude.
- **Head-to-tail method:** a graphical way to add vectors.

**3. Formulas & Principles**
- `A = Aₓ î + A_y ĵ`
- `Aₓ = A cosθ`, `A_y = A sinθ`
- `|A| = √(Aₓ² + A_y²)`, `θ = tan⁻¹(A_y/Aₓ)`

**4. Example**
`A = 10` at `30°`: `Aₓ = 8.66`, `A_y = 5`.

**5. Real-World Applications**
- Representing forces in engineering diagrams
- Weather maps (wind vectors)
- GPS navigation
- Computer graphics and animation

## 4.7 Vector Algebra

**1. Definition**
The rules for adding, subtracting, and multiplying vectors, including the dot (scalar) and cross (vector) products.

**2. Key Concepts**
- **Addition:** the parallelogram or triangle law.
- **Dot product:** gives a scalar; measures how much two vectors align.
- **Cross product:** gives a vector perpendicular to both (right-hand rule).
- **Commutativity:** `A·B = B·A`, but `A×B = −B×A`.

**3. Formulas & Principles**
- `A·B = AB cosθ = AₓBₓ + A_yB_y + A_zB_z`
- `|A×B| = AB sinθ`
- `A×B` components: `(A_yB_z − A_zB_y, A_zBₓ − AₓB_z, AₓB_y − A_yBₓ)`

**4. Example**
`A = (2, 3, 0)`, `B = (4, −1, 0)`: `A·B = 8 − 3 = 5`; `A×B = (2)(−1) − (3)(4) = −14 k̂`.

**5. Real-World Applications**
- Work done: `W = F·d`
- Torque and angular momentum (cross product)
- Magnetic force calculations
- 3D graphics and robotics

## 4.8 Periodic Motion

**1. Definition**
Motion that repeats itself at regular time intervals. When the restoring force is proportional to displacement, it is simple harmonic motion (SHM).

**2. Key Concepts**
- **Period (T) and frequency (f):** time per cycle and cycles per second.
- **Amplitude (A):** maximum displacement.
- **SHM condition:** acceleration is proportional to displacement and opposite in direction.
- **Energy:** exchanges between kinetic and potential, total stays constant.

**3. Formulas & Principles**
- `x = A cos(ωt + φ)`, `ω = 2π/T`
- `a = −ω²x`
- `v = ω√(A² − x²)`
- `E = ½kA²`

**4. Example**
`A = 0.1 m`, `T = 2 s`: `ω = π rad/s`, `v_max = Aω ≈ 0.314 m/s`.

**5. Real-World Applications**
- Clocks and watches
- Musical instruments (vibrating strings)
- Vehicle suspension systems
- Seismographs

## 4.9 Spring Force

**1. Definition**
The restoring force exerted by a stretched or compressed spring, proportional to its deformation and directed toward its natural length.

**2. Key Concepts**
- **Hooke's law:** valid within the elastic limit.
- **Spring constant (k):** stiffness, in N/m.
- **Elastic potential energy:** stored when deformed.
- **Combinations:** parallel `k = k₁ + k₂`; series `1/k = 1/k₁ + 1/k₂`.

**3. Formulas & Principles**
- `F = −kx`
- `U = ½kx²`
- Oscillation period: `T = 2π√(m/k)`

**4. Example**
`k = 200 N/m`, `x = 0.05 m`: `F = 10 N`, `U = 0.25 J`.

**5. Real-World Applications**
- Vehicle shock absorbers
- Weighing scales
- Mattresses and trampolines
- Ballpoint pens and clips

## 4.10 Simple Pendulum

**1. Definition**
A small mass (bob) hung from a light, inextensible string that swings back and forth under gravity.

**2. Key Concepts**
- **Small-angle SHM:** accurate for angles up to about 15°.
- **Independent of mass and amplitude:** the period depends only on L and g.
- **Restoring force:** component of gravity along the arc.
- **Seconds pendulum:** has T = 2 s (L ≈ 1 m).

**3. Formulas & Principles**
- `T = 2π √(L/g)`
- `f = (1/2π) √(g/L)`

**4. Example**
`L = 1 m`, `g = 9.8`: `T = 2π√(1/9.8) ≈ 2.0 s`.

**5. Real-World Applications**
- Pendulum clocks
- Measuring local g
- Metronomes
- Seismic and Foucault pendulum demonstrations

## 4.11 Gravitational Force

**1. Definition**
The attractive force between any two masses. Near a planet it appears as weight, the pull toward the planet's center.

**2. Key Concepts**
- **Acceleration due to gravity (g):** `g = GM/R²` (≈ 9.8 m/s² on Earth).
- **Weight vs mass:** mass is constant; weight depends on g.
- **Variation of g:** decreases with height and depth, and varies with latitude.
- **Gravitational potential energy:** `U = −GMm/r`.

**3. Formulas & Principles**
- `F = GMm/r²`, `G = 6.67×10⁻¹¹ N·m²/kg²`
- `W = mg`
- At height h: `g′ = g (R/(R+h))²`

**4. Example**
A 60 kg person weighs `60 × 9.8 = 588 N` on Earth and `60 × 1.62 ≈ 97 N` on the Moon.

**5. Real-World Applications**
- Satellite launch and orbit design
- Tides caused by Moon and Sun
- Dams and hydropower
- Weighing and space-mission planning

## 4.12 Gravitation Law

**1. Definition**
Newton's law of universal gravitation: every pair of masses in the universe attracts each other with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.

**2. Key Concepts**
- **Universal:** applies to apple and Moon alike.
- **Inverse-square law:** doubling the distance cuts the force to one quarter.
- **Kepler's laws:** elliptical orbits, equal areas in equal times, `T² ∝ r³`.
- **Orbital and escape velocity.**

**3. Formulas & Principles**
- `F = G m₁m₂ / r²`
- Orbital speed: `v = √(GM/r)`
- Escape velocity: `v_e = √(2GM/R)` (≈ 11.2 km/s for Earth)
- Kepler's third law: `T² = (4π²/GM) r³`

**4. Example**
Two 10 kg masses 1 m apart: `F = 6.67×10⁻¹¹ × 100 / 1 = 6.67×10⁻⁹ N`.

**5. Real-World Applications**
- Planetary and satellite orbit calculations
- GPS and communication satellites
- Space probe trajectories
- Tide prediction and mass measurement of planets

## 4.13 Angular Momentum

**1. Definition**
The rotational equivalent of linear momentum. It measures how much rotational motion a body has about an axis.

**2. Key Concepts**
- **Moment of inertia (I):** rotational resistance to change in motion.
- **Vector quantity:** direction along the rotation axis (right-hand rule).
- **Relation to torque:** net torque equals the rate of change of angular momentum.
- **Point particle:** `L = r × p`.

**3. Formulas & Principles**
- `L = Iω`
- `L = mvr sinθ`
- `τ = dL/dt`

**4. Example**
`I = 2 kg·m²`, `ω = 5 rad/s`: `L = 10 kg·m²/s`.

**5. Real-World Applications**
- Gyroscopes and navigation systems
- Spinning satellites and reaction wheels
- Sports (spinning ball, diver)
- Planetary motion

## 4.14 Precession Motion

**1. Definition**
The slow circular movement of the axis of a spinning body when an external torque, such as gravity, acts on it perpendicular to its angular momentum.

**2. Key Concepts**
- **Gyroscopic effect:** a spinning body resists changes in its axis direction.
- **Torque direction:** the axis moves sideways instead of falling.
- **Faster spin:** gives slower precession.
- **Earth's precession:** about a 26,000-year cycle.

**3. Formulas & Principles**
- Precession rate: `Ω = τ / (Iω) = mgr / (Iω)`
- `m` = mass, `r` = distance of centre of mass from pivot, `I` = moment of inertia, `ω` = spin rate.

**4. Example**
A top with `m = 0.5 kg`, `r = 0.05 m`, `I = 10⁻⁴ kg·m²`, `ω = 200 rad/s`: `Ω = (0.5 × 9.8 × 0.05)/(10⁻⁴ × 200) ≈ 12 rad/s`.

**5. Real-World Applications**
- Gyrocompasses and inertial navigation
- Spinning tops and bicycles (stability)
- Spacecraft attitude control
- Understanding the shifting of Earth's pole star

## 4.15 Torque

**1. Definition**
Torque is the turning effect of a force about an axis or pivot point.

**2. Key Concepts**
- **Lever arm:** perpendicular distance from the axis to the line of force.
- **Direction:** along the axis, from the right-hand rule.
- **Rotational equilibrium:** net torque is zero.
- **Rotational Newton's law:** torque causes angular acceleration.

**3. Formulas & Principles**
- `τ = r F sinθ = r × F`
- `τ = Iα`
- Equilibrium: `Στ = 0`

**4. Example**
A 20 N force applied perpendicular to a spanner 0.5 m long: `τ = 0.5 × 20 = 10 N·m`.

**5. Real-World Applications**
- Spanners, screwdrivers, and door handles
- Engines (crankshaft torque)
- Seesaws and balance scales
- Electric motors

## 4.16 Conservation of Angular Momentum

**1. Definition**
If no net external torque acts on a system, its total angular momentum remains constant.

**2. Key Concepts**
- **Isolated rotation:** no external torque means `L` is constant.
- **Changing I:** if I decreases, ω increases, and vice versa.
- **Kinetic energy changes:** the work is done by internal forces.
- **Kepler's second law:** a direct consequence.

**3. Formulas & Principles**
- `L = Iω = constant`
- `I₁ω₁ = I₂ω₂`

**4. Example**
A skater spins with `I = 4 kg·m²` at `2 rad/s`, then pulls in her arms so `I = 2 kg·m²`: `ω₂ = (4×2)/2 = 4 rad/s`.

**5. Real-World Applications**
- Figure skating and ballet spins
- Platform divers and gymnasts
- Neutron stars spinning faster as they collapse
- Helicopter tail rotors and satellite stabilization

---

# 5. Electricity

## 5.1 Coulomb's Law

**1. Definition**
Coulomb's law gives the electrostatic force between two point charges: it is proportional to the product of the charges and inversely proportional to the square of the distance between them.

**2. Key Concepts**
- **Like charges repel, unlike charges attract.**
- **Inverse-square law:** similar in form to gravity but much stronger.
- **Superposition:** the net force on a charge is the vector sum of forces from others.
- **Medium effect:** the force decreases by a factor of the dielectric constant K.

**3. Formulas & Principles**
- `F = k q₁q₂ / r²`, `k = 1/(4πε₀) = 9×10⁹ N·m²/C²`
- `q₁, q₂` = charges (C), `r` = separation (m).

**4. Example**
Two 1 µC charges 0.1 m apart: `F = 9×10⁹ × 10⁻¹² / 0.01 = 0.9 N` (repulsive).

**5. Real-World Applications**
- Laser printers and photocopiers
- Electrostatic precipitators (pollution control)
- Spray painting
- Understanding atomic and molecular bonding

## 5.2 The Electric Field

**1. Definition**
The electric field is the region around a charge where another charge experiences a force. Its strength is the force per unit positive test charge.

**2. Key Concepts**
- **Field lines:** start on positive, end on negative charges, and never cross.
- **Superposition:** fields from several charges add as vectors.
- **Uniform field:** constant field between parallel plates.
- **Relation to potential:** field points in the direction of decreasing potential.

**3. Formulas & Principles**
- `E = F / q`
- Point charge: `E = kQ / r²`
- Uniform field: `E = V / d`

**4. Example**
`Q = 2 nC`, `r = 0.3 m`: `E = 9×10⁹ × 2×10⁻⁹ / 0.09 = 200 N/C`.

**5. Real-World Applications**
- Capacitors and electronic circuits
- Cathode ray and oscilloscope deflection plates
- Lightning rods
- Particle accelerators

## 5.3 Three Point Charges in a Line

**1. Definition**
A problem in which three point charges lie along a straight line. The net force on each is the vector sum of the forces from the other two.

**2. Key Concepts**
- **Superposition principle:** compute each pair's force separately, then add with signs.
- **Direction by sign:** like charges push apart, unlike pull together.
- **Equilibrium point:** may exist where forces cancel (between like charges, outside near the smaller of unlike charges).
- **Symmetry:** simplifies the calculation.

**3. Formulas & Principles**
- `F_net = F₁₂ + F₁₃` (taking direction along the line)
- Each term: `F = k qᵢqⱼ / r²`

**4. Example**
Three +1 µC charges at x = 0, 0.1, 0.2 m. Force on the end charge: `F = kq²(1/0.1² + 1/0.2²) = 9×10⁻³ × (100 + 25) ≈ 1.125 N` (pointing away). The middle charge feels zero net force by symmetry.

**5. Real-World Applications**
- Ion arrangement in crystals and linear molecules
- Ion traps and mass spectrometry
- Charge distribution in power equipment
- Understanding molecular geometry

## 5.4 Three Point Charges at Triangle Corners

**1. Definition**
Three point charges placed at the vertices of a triangle, where the net force on one charge is the vector sum of the forces from the other two.

**2. Key Concepts**
- **Vector addition:** forces must be added using components, not just magnitudes.
- **Equilateral symmetry:** the net force on each charge points along the line from the centroid.
- **Angle between forces:** 60° in an equilateral triangle.
- **Equilibrium:** possible only for suitable charge combinations.

**3. Formulas & Principles**
- Equal charges at side `a`: `F_net = 2F cos30° = √3 kq²/a²`
- General: `F_net = √(F₁² + F₂² + 2F₁F₂ cosθ)`

**4. Example**
Three 1 µC charges, `a = 0.1 m`: each pair force is `0.9 N`, so `F_net = √3 × 0.9 ≈ 1.56 N`, directed away from the centroid.

**5. Real-World Applications**
- Molecular structure (e.g., triangular ion clusters)
- Crystal lattice design
- Electrostatic simulation and charge modeling
- Nanotechnology and particle arrangement

## 5.5 Understanding Capacitance

**1. Definition**
Capacitance is the ability of a conductor system, such as two plates separated by an insulator, to store electric charge per unit potential difference.

**2. Key Concepts**
- **Capacitor:** two conductors separated by a dielectric.
- **Energy storage:** the energy is held in the electric field.
- **Unit:** farad (F); common values are µF, nF, pF.
- **Combinations:** parallel adds capacitances; series adds reciprocals.

**3. Formulas & Principles**
- `C = Q / V`
- `U = ½CV² = Q²/2C`
- Parallel: `C = C₁ + C₂`; series: `1/C = 1/C₁ + 1/C₂`

**4. Example**
`C = 10 µF`, `V = 12 V`: `Q = 120 µC`, `U = ½ × 10⁻⁵ × 144 = 7.2×10⁻⁴ J`.

**5. Real-World Applications**
- Camera flashes
- Power supply filtering
- Touchscreens
- Tuning circuits in radios

## 5.6 Factors Affecting Capacitance

**1. Definition**
The capacitance of a parallel-plate capacitor depends on its geometry and the material between the plates, not on charge or voltage.

**2. Key Concepts**
- **Plate area (A):** larger area gives larger C.
- **Separation (d):** smaller gap gives larger C.
- **Dielectric constant (K):** inserting a dielectric increases C by factor K.
- **Dielectric strength:** limits the maximum voltage.

**3. Formulas & Principles**
- `C = K ε₀ A / d`
- `C ∝ A`, `C ∝ 1/d`, `C ∝ K`

**4. Example**
`A = 0.01 m²`, `d = 1 mm`: in air `C = 8.85×10⁻¹² × 0.01 / 10⁻³ ≈ 88.5 pF`; with `K = 5`, `C ≈ 442 pF`.

**5. Real-World Applications**
- Variable tuning capacitors
- Capacitive touch and proximity sensors
- Microphones and pressure sensors
- High-energy capacitors with ceramic or polymer dielectrics

## 5.7 Understanding Inductance

**1. Definition**
Inductance is the property of a coil or circuit that opposes changes in current by inducing an EMF. It stores energy in a magnetic field.

**2. Key Concepts**
- **Self-induction:** a changing current induces an EMF in its own coil.
- **Lenz's law:** the induced EMF opposes the change.
- **Unit:** henry (H).
- **Core material:** an iron core greatly increases L.

**3. Formulas & Principles**
- `ε = −L dI/dt`
- `U = ½LI²`
- Solenoid: `L = μ₀N²A / l`

**4. Example**
`L = 2 H`, current changes by 3 A in 0.1 s: `|ε| = 2 × 3/0.1 = 60 V`.

**5. Real-World Applications**
- Transformers and chokes
- Filters in power supplies
- Ignition coils in cars
- Wireless charging and induction heating

## 5.8 LC Oscillator

**1. Definition**
A circuit with an inductor (L) and capacitor (C) in which energy oscillates between the capacitor's electric field and the inductor's magnetic field, producing electrical oscillations.

**2. Key Concepts**
- **Energy exchange:** the total energy stays constant (ideal case).
- **Natural frequency:** set only by L and C.
- **Analogy:** mass–spring system (L ↔ mass, 1/C ↔ spring constant).
- **Damping:** real circuits lose energy due to resistance.

**3. Formulas & Principles**
- `ω = 1 / √(LC)`, `f = 1 / (2π√(LC))`
- `q = Q₀ cos(ωt)`
- Total energy: `U = Q₀² / 2C`

**4. Example**
`L = 10 mH`, `C = 1 µF`: `ω = 1/√(10⁻²×10⁻⁶) = 10⁴ rad/s`, so `f ≈ 1.59 kHz`.

**5. Real-World Applications**
- Radio and TV tuning circuits
- Signal generators and oscillators
- Wireless transmitters and receivers
- Metal detectors

---

# 6. Magnetism

## 6.1 History of Electromagnetism

**1. Definition**
The development of the understanding that electricity and magnetism are two aspects of a single force, culminating in Maxwell's unified theory of electromagnetism.

**2. Key Concepts**
- **Oersted (1820):** a current-carrying wire deflects a compass needle.
- **Ampère:** forces between current-carrying wires.
- **Faraday (1831):** a changing magnetic field induces an EMF.
- **Maxwell (1860s) and Hertz (1887):** unified equations predicting and confirming EM waves.

**3. Formulas & Principles**
- Maxwell's equations: Gauss (electric), Gauss (magnetic), Faraday, and Ampère–Maxwell law.
- Speed of EM waves: `c = 1/√(μ₀ε₀)`

**4. Example**
`c = 1/√(4π×10⁻⁷ × 8.85×10⁻¹²) ≈ 3×10⁸ m/s`, showing light is an electromagnetic wave.

**5. Real-World Applications**
- Electric generators and motors
- Radio, TV, radar, and Wi-Fi
- Transformers and power grids
- MRI and wireless charging

## 6.2 Fleming's Thumb Rule

**1. Definition**
Fleming's rules are hand mnemonics for finding directions of force, field, and current. The left-hand rule gives the force on a conductor (motor effect), and the right-hand rule gives the induced current (generator effect). The thumb always points to the motion or force.

**2. Key Concepts**
- **Left-hand rule:** thumb = Force, forefinger = Field, middle finger = Current.
- **Right-hand rule:** thumb = Motion, forefinger = Field, middle finger = induced Current.
- **Mutually perpendicular:** the three digits are held at right angles.
- **Right-hand thumb rule:** the thumb points along current and the curled fingers show the magnetic field circles.

**3. Formulas & Principles**
- Motor effect: `F = I L × B`
- Generator effect: `ε = B L v`

**4. Example**
Current flows east and the magnetic field points north. Using the left-hand rule, the force on the wire is directed **upward**.

**5. Real-World Applications**
- Electric motors
- Generators and alternators
- Loudspeakers
- Electromagnetic brakes

## 6.3 Magnetic Effect due to Current

**1. Definition**
A current-carrying conductor produces a magnetic field around it, as discovered by Oersted. The field's shape depends on the conductor's geometry.

**2. Key Concepts**
- **Straight wire:** circular field lines around the wire.
- **Circular loop:** field is strongest at the center.
- **Solenoid:** nearly uniform field inside, like a bar magnet.
- **Biot–Savart law:** gives the field from a small current element.

**3. Formulas & Principles**
- Straight wire: `B = μ₀I / (2πr)`
- Loop centre: `B = μ₀I / (2R)`
- Solenoid: `B = μ₀ n I`
- `n` = turns per unit length.

**4. Example**
`I = 5 A`, `r = 0.1 m`: `B = (2×10⁻⁷ × 5)/0.1 = 1×10⁻⁵ T`.

**5. Real-World Applications**
- Electromagnets in cranes and relays
- Electric bells and circuit breakers
- Solenoid valves
- MRI magnets

## 6.4 Force on a Current Carrying Conductor

**1. Definition**
A conductor carrying current in a magnetic field experiences a force because the moving charges inside it feel the Lorentz force.

**2. Key Concepts**
- **Perpendicular maximum:** the force is greatest when the wire is at 90° to the field.
- **Zero force:** when the wire is parallel to the field.
- **Direction:** given by Fleming's left-hand rule.
- **Origin:** sum of Lorentz forces on all moving charges.

**3. Formulas & Principles**
- `F = I L B sinθ`
- `I` = current, `L` = length in the field, `B` = flux density, `θ` = angle between wire and field.

**4. Example**
`B = 0.5 T`, `I = 4 A`, `L = 0.3 m`, perpendicular: `F = 0.5 × 4 × 0.3 = 0.6 N`.

**5. Real-World Applications**
- DC motors
- Moving-coil loudspeakers
- Galvanometers and ammeters
- Railguns and maglev research

## 6.5 Electromagnetic Induction

**1. Definition**
The production of an EMF (and current in a closed circuit) in a conductor when the magnetic flux linked with it changes.

**2. Key Concepts**
- **Magnetic flux (Φ):** the amount of field passing through an area.
- **Faraday's law:** induced EMF equals the rate of change of flux.
- **Lenz's law:** the induced current opposes the change that causes it (energy conservation).
- **Eddy currents:** circulating currents induced in bulk conductors.

**3. Formulas & Principles**
- `Φ = B A cosθ`
- `ε = −N dΦ/dt`

**4. Example**
A 100-turn coil has flux falling from 0.02 Wb to 0.01 Wb in 0.1 s: `|ε| = 100 × 0.01/0.1 = 10 V`.

**5. Real-World Applications**
- Electric generators and power plants
- Transformers
- Induction cooktops
- Wireless chargers and card readers

## 6.6 Hall Effect

**1. Definition**
When a current-carrying conductor or semiconductor is placed in a magnetic field perpendicular to the current, a voltage (Hall voltage) develops across it at right angles to both.

**2. Key Concepts**
- **Charge deflection:** the magnetic force pushes charge carriers to one side.
- **Hall field:** builds until it balances the magnetic force.
- **Carrier type:** the sign of the Hall voltage reveals if carriers are positive or negative.
- **Hall coefficient:** `R_H = 1/(nq)`.

**3. Formulas & Principles**
- `V_H = I B / (n q t)`
- `n` = carrier density, `q` = charge, `t` = thickness along B.

**4. Example**
`I = 10 mA`, `B = 0.5 T`, `n = 10²² m⁻³`, `t = 1 mm`: `V_H = (0.01 × 0.5)/(10²² × 1.6×10⁻¹⁹ × 10⁻³) ≈ 3.1 mV`.

**5. Real-World Applications**
- Hall sensors in cars (wheel speed, crankshaft position)
- Current sensors and proximity switches
- Measuring magnetic field strength (gaussmeters)
- Determining carrier density and type in semiconductors

## 6.7 Understanding Lorentz Force

**1. Definition**
The Lorentz force is the total electromagnetic force on a charged particle moving in electric and magnetic fields.

**2. Key Concepts**
- **Magnetic part:** perpendicular to velocity, so it does no work and changes only direction.
- **Circular motion:** a charge moving perpendicular to a uniform B follows a circle.
- **Helical path:** if velocity has a component along B.
- **Velocity selector:** crossed E and B pass only particles with `v = E/B`.

**3. Formulas & Principles**
- `F = q(E + v × B)`
- Magnetic only: `F = q v B sinθ`
- Radius: `r = mv / (qB)`; period: `T = 2πm / (qB)`

**4. Example**
An electron at `10⁶ m/s` in `B = 1 mT`: `r = (9.11×10⁻³¹ × 10⁶)/(1.6×10⁻¹⁹ × 10⁻³) ≈ 5.7 mm`.

**5. Real-World Applications**
- Cyclotrons and particle accelerators
- Mass spectrometers
- Cathode-ray tubes
- Aurora formation and Van Allen belts

## 6.8 Motional EMF

**1. Definition**
The EMF induced across a conductor moving through a magnetic field, caused by the magnetic force on its free charges.

**2. Key Concepts**
- **Cutting flux lines:** EMF arises when a conductor moves across field lines.
- **Direction:** found by Fleming's right-hand rule or Lenz's law.
- **Energy conversion:** mechanical work becomes electrical energy.
- **Braking force:** the induced current causes an opposing magnetic force.

**3. Formulas & Principles**
- `ε = B L v` (B, L, v mutually perpendicular)
- `ε = B L v sinθ` in general
- Induced current: `I = ε / R`

**4. Example**
`B = 0.2 T`, `L = 0.5 m`, `v = 4 m/s`: `ε = 0.4 V`; with `R = 2 Ω`, `I = 0.2 A`.

**5. Real-World Applications**
- Electric generators
- Magnetic flowmeters
- Aircraft wings cutting Earth's magnetic field
- Regenerative braking in electric vehicles

## 6.9 Understanding Force on a Current Carrying Wire

**1. Definition**
This topic extends the force on conductors to two parallel wires and to current loops. Parallel wires attract if currents are in the same direction and repel if opposite; a loop in a field experiences a torque.

**2. Key Concepts**
- **Field of one wire acts on the other:** each wire sits in the other's magnetic field.
- **Same direction attracts, opposite repels.**
- **Definition of the ampere:** based on force between parallel wires.
- **Torque on a loop:** the basis of motors and meters.

**3. Formulas & Principles**
- Force per unit length: `F/L = μ₀ I₁ I₂ / (2π d)`
- Torque on a coil: `τ = N I A B sinθ`
- Magnetic moment: `m = N I A`

**4. Example**
Two wires with `I₁ = I₂ = 10 A`, `d = 0.1 m`: `F/L = (2×10⁻⁷ × 100)/0.1 = 2×10⁻⁴ N/m` (attractive).

**5. Real-World Applications**
- DC motors and moving-coil galvanometers
- Busbars and power-line spacing design
- Electromagnetic actuators and relays
- Defining the SI unit of current

---

*End of handbook.*
