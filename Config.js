// ═══════════════════════════════════════════════════════════════════════
// Config.js — All workout data, profiles, and static app configuration
// ═══════════════════════════════════════════════════════════════════════

/* ══════════════════════════
   DAILY SCHEDULE
══════════════════════════ */
const dailySchedule = [
  { time:'06:00', label:'Morning Routine' },
  { time:'07:00', label:'Workout Time 🏋️' },
  { time:'08:00', label:'Breakfast & Recovery' },
  { time:'09:00', label:'Deep Work' },
  { time:'12:00', label:'Lunch Break' },
  { time:'13:00', label:'Afternoon Work' },
  { time:'17:00', label:'Evening Workout 💪' },
  { time:'18:30', label:'Dinner & Unwind' },
  { time:'21:00', label:'Wind Down' },
  { time:'22:30', label:'Sleep' },
];

/* ══════════════════════════
   HYDRATION MESSAGES
   Science-based triggers (ACE / NSCA / Mass General Brigham / PubMed)
══════════════════════════ */
const hydrationMessages = {
  exercise: {
    reason: 'AFTER EXERCISE',
    msgs: [
      "Muscles consume water during contractions — even mild dehydration cuts performance by up to 10%. Sip now.",
      "Your heart rate is elevated. Replacing fluid now helps maintain blood volume and prevents fatigue.",
      "Each rep you did heated your core. A quick sip helps thermoregulate before the next set.",
    ],
    amount: '100–200 ml',
  },
  round: {
    reason: 'ROUND COMPLETE',
    msgs: [
      "You just finished a full round — that's ~20 minutes of work. ACE recommends 4–8 oz right now.",
      "Between rounds is the #1 most effective hydration window. Your gut absorbs fluid fastest at rest.",
      "Round done. Rehydrating now shortens recovery time before the next round begins.",
    ],
    amount: '150–250 ml',
  },
  preworkout: {
    reason: 'PRE-WORKOUT',
    msgs: [
      "Studies show 66% of people start exercise already dehydrated. Get ahead of it — drink now.",
      "Pre-hydrating 20–30 min before exercise maintains plasma volume and delays fatigue onset.",
      "Your warm-up is about to begin. 8 oz of water now sets you up for the whole session.",
    ],
    amount: '200–250 ml',
  },
  postworkout: {
    reason: 'POST-WORKOUT',
    msgs: [
      "Session complete! Experts recommend drinking 150% of fluid lost within 2 hours post-exercise. Start now.",
      "Post-workout rehydration with sodium accelerates recovery and restores plasma volume faster.",
      "Cool-down done. The next 30 minutes are critical for rehydration and muscle repair.",
    ],
    amount: '300–500 ml',
  },
  periodic: {
    reason: 'STAY HYDRATED',
    msgs: [
      "20 minutes have passed — the NSCA recommends sipping every 15–20 min throughout activity.",
      "By the time you feel thirsty, you're already 1–2% dehydrated. Don't wait — drink proactively.",
      "Regular small sips outperform large infrequent drinks. Your gut absorbs ~1.2 L per hour max.",
    ],
    amount: '100–150 ml',
  },
  timerEnd: {
    reason: 'REST OVER — DRINK!',
    msgs: [
      "Your rest period just ended — prime time to sip before the next set starts.",
      "Drinking during rest restores blood volume faster than drinking mid-set. Do it now.",
    ],
    amount: '100–150 ml',
  },
};

/* ══════════════════════════════════════════════════════════════════
   HOME BODY-WORKOUT — Phase Data
   Each slot has an `alts` array. alts[0] is the default shown first.
══════════════════════════════════════════════════════════════════ */
const homeBodyPhases = {
  Rest: {
    warmup: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },
    main: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--main)',
      blocks: [],
      exercises: [],
    },
    cool: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--cool)',
      exercises: [],
    },
    finisher: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },
  },

  Default: {
      warmup: {
    title: 'Warm-Up',
    sub: '8–10 min · No rest — keep moving',
    accent: 'var(--warm)',
    exercises: [
      { alts: [
        { name:'Marching in Place', ids:['Ac8M_Osjy6s'], stat:'60 sec', why:'Raises heart rate and wakes up hip flexors.', desc:'Drive knees up alternately while pumping arms. Stand tall, brace core, land softly.' },
        { name:'High Knees', ids:['DfjpR6dzLVg'], stat:'60 sec', why:'Cardio activation with stronger hip flexor engagement.', desc:'Run on the spot driving knees toward your chest. Pump arms in sync, stay on the balls of your feet.' },
        { name:'Butt Kicks', ids:['lVZi-AwxLPo'], stat:'60 sec', why:'Activates hamstrings and keeps heart rate up.', desc:'Jog on the spot, kicking heels up toward your glutes. Keep torso upright.' },
      ]},
      { alts: [
        { name:'Arm Circles', ids:['D40wm6vbI_0'], stat:'30 sec each direction', why:'Mobilises shoulder joints and warms the rotator cuff.', desc:'Arms straight out. Start small then widen. Shoulders stay down. Switch direction halfway.' },
        { name:'Shoulder Rolls', ids:['X7NtgY9kCCM'], stat:'30 sec forward / 30 sec back', why:'Releases upper trapezius and prepares shoulder girdle.', desc:'Big slow rolls forward, then reverse. Let arms hang loose. Feel the shoulder blades moving.' },
      ]},
      { alts: [
        { name:'Hip Circles', ids:['fhosmniT48I'], stat:'30 sec each direction', why:'Lubricates hip joints and activates glutes.', desc:'Feet shoulder-width, hands on hips. Draw large slow circles. Upper body stays still.' },
        { name:'Hip Hinges', ids:['sinpFajtRPw'], stat:'10 reps', why:'Activates posterior chain and teaches the hinge pattern.', desc:'Feet hip-width, soft knees. Push hips back as torso tips forward. Feel hamstrings load, then drive hips forward to stand.' },
        { name:'Standing Side Bends', ids:['RfuiraEgKcY'], stat:'10 reps each side', why:'Mobilises the lateral spine and obliques.', desc:'Feet shoulder-width, arm overhead. Bend slowly to one side until you feel a lateral stretch, return. Alternate sides.' },
      ]},
      { alts: [
        { name:'Leg Swings', ids:['difYoBtZi2s'], stat:'10 reps each leg', why:'Dynamically stretches hamstrings and adductors.', desc:'Hold a wall. Swing one leg forward and back in a controlled arc.' },
        { name:'Standing Knee Hugs', ids:['ovgnoeaaZRI'], stat:'10 reps each leg', why:'Stretches glutes and primes balance.', desc:'Lift one knee to chest, hug with both hands. Hold 1 sec. Alternate legs while walking in place.' },
        { name:'Ankle Rolls', ids:['dV5opNYJvQE'], stat:'10 reps each foot', why:'Mobilises ankle joints and prevents lower-leg tightness.', desc:'Lift one foot, trace slow circles with toes — 10 one way, 10 the other. Repeat other foot.' },
      ]},
      { alts: [
        { name:'Inchworms', ids:['pv_8CdDPAAk'], stat:'6 reps', why:'Activates the full posterior chain, core and shoulders.', desc:'Hinge forward, walk hands to a plank. Pause, then walk feet back to hands and stand.' },
        { name:'Bear Crawl', ids:['qpaxI2m75RY'], stat:'10 steps forward / 10 back', why:'Full-body coordination, core and shoulder stability.', desc:'On hands and knees, lift knees 2 inches off floor. Move opposite hand and foot together, staying low.' },
        { name:'Downward Dog Pedals', ids:['tZtlAceyqoA'], stat:'60 sec', why:'Stretches calves and hamstrings while warming the shoulders.', desc:'Downward dog position. Alternate pressing one heel toward the floor at a time, hold 2 sec each side.' },
      ]},
      { alts: [
        { name:"World's Greatest Stretch", ids:['-CiWQ2IvY34'], stat:'3 reps per side', why:"Opens hip flexors, thoracic spine and groin in one move.", desc:'Deep lunge, same-side hand beside front foot, rotate top arm toward ceiling. Hold 2 sec.' },
        { name:'Spiderman Lunge', ids:['R1UvsRbMTGQ'], stat:'5 reps per side', why:'Combines hip flexor stretch with thoracic rotation.', desc:'Step into a deep lunge, drop same-side elbow to the floor, then rotate and reach that arm to the ceiling.' },
        { name:'Hip Flexor Rock', ids:['zm6uf3E3ZfI'], stat:'8 reps per side', why:'Dynamically loosens tight hip flexors and improves lunge depth.', desc:'Half-kneeling lunge. Rock hips forward gently until you feel the front hip stretch. Rock back. Repeat rhythmically.' },
      ]},
      { alts: [
        { name:'Jumping Jacks', ids:['CWpmIW6l-YA'], stat:'60 sec', why:'Full-body cardio activation that raises core temperature.', desc:'Jump feet wide as arms go overhead, then return. Stay light on feet.' },
        { name:'Step Jacks', ids:['JHdVMkRBuRA'], stat:'60 sec', why:'Low-impact alternative that still raises heart rate.', desc:'Step one foot out wide as arms go up, bring it back, then alternate feet. Same rhythm as a jumping jack — no jump.' },
        { name:'Skaters', ids:['Jx2KXGbQkYM'], stat:'60 sec', why:'Lateral movement pattern that warms hips and improves coordination.', desc:'Leap sideways onto one foot, swinging the other leg behind. Touch hand to foot. Leap the other way.' },
      ]},
    ]
  },

  main: {
    title: 'Main Workout',
    sub: '3 rounds · 30–45 sec rest between exercises · 90 sec between rounds',
    accent: 'var(--main)',
    blocks: [
      { label:'🔵 BLOCK A — LOWER BODY & GLUTES', start:0, end:2 },
      { label:'🔴 BLOCK B — PUSH & UPPER BODY',   start:3, end:5 },
      { label:'🟢 BLOCK C — CORE & STABILITY',    start:6, end:8 },
      { label:'🟡 BLOCK D — FULL BODY & CARDIO',  start:9, end:11 },
    ],
    exercises: [
      /* A1 */ { alts: [
        { name:'Bodyweight Squats', ids:['l83R5PblSMA'], stat:'3 × 15 reps', rest:'30–45 sec', why:'Most efficient lower-body compound — quads, glutes, hamstrings.', desc:'Feet shoulder-width, toes slightly out. Hips back and down. Chest up, knees track toes. Squeeze glutes at top.', mod:'Squat to a chair seat to control depth.' },
        { name:'Sumo Squats', ids:['9ZuXKqRbT9k'], stat:'3 × 15 reps', rest:'30–45 sec', why:'Wider stance shifts emphasis to inner thighs and glutes.', desc:"Toes turned out 45°, stance wider than shoulders. Drop straight down, keeping chest tall. Drive knees out.", mod:'Hold onto a door frame for balance.' },
        { name:'Wall Sit', ids:['cWTZ8Am1Ee0'], stat:'3 × 30 sec', rest:'30–45 sec', why:'Isometric quad and glute hold builds endurance without joint loading.', desc:'Back flat on wall, thighs parallel to floor, 90° at knees. Hold still. Arms can rest on thighs.', mod:'Raise the height of your sit to reduce intensity.' },
      ]},
      /* A2 */ { alts: [
        { name:'Reverse Lunges', ids:['xrPteyQLGAo'], stat:'3 × 10 reps/leg', rest:'30–45 sec', why:'Glute-dominant lunge that places less stress on the knee.', desc:'Step back, lower rear knee toward floor. Front shin vertical. Push through front heel to return.', mod:'Hold a wall for balance.' },
        { name:'Forward Lunges', ids:['MxfTNXSFiYI'], stat:'3 × 10 reps/leg', rest:'30–45 sec', why:'Classic quad and glute compound with balance challenge.', desc:'Step forward, lower back knee toward floor. Keep torso upright. Push through front foot to return.', mod:'Shorten stride length and hold a wall.' },
        { name:'Side Lunges', ids:['1D_tsUSW3ZY'], stat:'3 × 8 reps/leg', rest:'30–45 sec', why:'Trains inner thighs and adductors — often neglected in forward-plane work.', desc:'Step wide to one side, bend that knee while keeping other leg straight. Sit hips back. Return and repeat.', mod:'Reduce stride width until comfortable.' },
      ]},
      /* A3 */ { alts: [
        { name:'Glute Bridges', ids:['Xp33YgPZgns'], stat:'3 × 15 reps', rest:'30–45 sec', why:'Highest single-joint glute activation of any bodyweight exercise.', desc:'Lie on back, knees bent, feet flat. Press through heels, drive hips up. Squeeze hard at top for 1 sec.', mod:'Reduce range of motion, focus on the top squeeze.' },
        { name:'Single-Leg Glute Bridge', ids:['vdmlNaXSjd4'], stat:'3 × 10 reps/leg', rest:'30–45 sec', why:'Increases glute loading and fixes left-right imbalances.', desc:'One foot flat, one leg extended. Bridge up with the working leg, hold 1 sec at top, lower slowly.', mod:'Keep the non-working foot lightly on the floor.' },
        { name:'Hip Thrust (floor)', ids:['FJNPGhF1R-Y'], stat:'3 × 15 reps', rest:'30–45 sec', why:'Full hip extension with a longer range than a standard bridge.', desc:'Upper back on floor, knees bent. Drop hips low, then drive explosively upward. Chin tucked, ribs down.', mod:'Same as glute bridge — both feet flat.' },
      ]},
      /* B1 */ { alts: [
        { name:'Push-Ups', ids:['WDIpL0pjun0'], stat:'3 × 10–12 reps', rest:'30–45 sec', why:'Compound upper-body — chest, shoulders, triceps and core in one.', desc:'Hands slightly wider than shoulder-width, rigid plank. Lower chest to floor, elbows at 45°.', mod:'Drop to knees.' },
        { name:'Wide Push-Ups', ids:['pQUsUHvyoI0'], stat:'3 × 10 reps', rest:'30–45 sec', why:'Wider hand placement shifts emphasis to the outer chest.', desc:'Hands 1.5× shoulder-width, fingers angled slightly out. Lower slowly, elbows flare wider. Press back up.', mod:'Drop to knees.' },
        { name:'Diamond Push-Ups', ids:['UCmqw3kKZ38'], stat:'3 × 8 reps', rest:'30–45 sec', why:'Narrow grip maximises tricep and inner chest recruitment.', desc:'Hands together forming a diamond under your chest. Keep elbows tracking back along your sides.', mod:'Drop to knees.' },
      ]},
      /* B2 */ { alts: [
        { name:'Pike Push-Ups', ids:['XckEEwa1BPI'], stat:'3 × 8 reps', rest:'30–45 sec', why:'Shifts load to shoulders — builds pressing strength without weights.', desc:'Hips high in a downward-dog. Bend elbows to lower head toward floor, then press back up.', mod:'Lower hip height to reduce difficulty.' },
        { name:'Decline Push-Ups', ids:['QBlYp-EwHlo'], stat:'3 × 8 reps', rest:'30–45 sec', why:'Elevating the feet increases upper-chest and front-delt activation.', desc:'Feet on a low step or bed edge, body in a straight line. Lower chest slowly, press back up.', mod:'Use a lower surface.' },
        { name:'Shoulder Taps', ids:['gWHQpMUd7vw'], stat:'3 × 20 taps (10/side)', rest:'30–45 sec', why:'Builds shoulder stability and anti-rotation core strength from a push-up position.', desc:'High plank, feet wide. Lift one hand to tap the opposite shoulder, replacing it before rotating. Keep hips still.', mod:'Widen feet for more stability.' },
      ]},
      /* B3 */ { alts: [
        { name:'Tricep Dips (floor)', ids:['ufJ08eTsB80'], stat:'3 × 10 reps', rest:'30–45 sec', why:'Isolates the triceps using only the floor — no chair needed.', desc:'Sit on floor, hands behind hips, fingers forward. Lift hips, bend elbows to lower toward floor, then press back.', mod:'Keep hips closer to the floor throughout.' },
        { name:'Tricep Push-Ups', ids:['4UXZtR-rIoY'], stat:'3 × 8 reps', rest:'30–45 sec', why:'Push-up variation that directly loads the triceps.', desc:'Hands directly under shoulders or slightly narrower. Lower keeping elbows pinned to your sides throughout.', mod:'Drop to knees.' },
        { name:'Plank to Push-Up', ids:['56vUOad6Irs'], stat:'3 × 8 reps', rest:'30–45 sec', why:'Combines tricep and shoulder work while training core stability.', desc:'Start in forearm plank. Press up to high plank one hand at a time, then lower back down. Alternate the leading arm.', mod:'Do it from the knees.' },
      ]},
      /* C1 */ { alts: [
        { name:'Plank', ids:['pvIjsG5Svck'], stat:'3 × 30–40 sec', rest:'30–45 sec', why:'Deep core activation — the foundation of safe and strong movement.', desc:'Forearms down, body one straight line. Pull belly up, clench glutes, press heels back.', mod:'Drop to forearms and knees.' },
        { name:'High Plank', ids:['7FRL_NPM43M'], stat:'3 × 30–40 sec', rest:'30–45 sec', why:'Adds shoulder stability demands vs forearm plank.', desc:'Wrists under shoulders, rigid straight line from head to heel. Keep hips in line — not raised or sagging.', mod:'Drop to knees.' },
        { name:'Side Plank', ids:['2W96p2PIoPg'], stat:'3 × 20 sec each side', rest:'30–45 sec', why:'Targets lateral core and obliques — critical for spinal stability.', desc:'On forearm, feet stacked or staggered. Body forms a straight diagonal. Drive hips up away from the floor.', mod:'Bend the lower knee to the floor.' },
      ]},
      /* C2 */ { alts: [
        { name:'Mountain Climbers', ids:['wQq3ybaLZeA'], stat:'3 × 20 reps (10/side)', rest:'30–45 sec', why:'Combines core stability with cardiovascular demand in one move.', desc:'High plank. Drive one knee toward chest then quickly switch. Hips level, core braced.', mod:'Slow to a deliberate step instead of a run.' },
        { name:'Plank Knee to Elbow', ids:['pI7uWJXcfPE'], stat:'3 × 12 reps (6/side)', rest:'30–45 sec', why:'Slower mountain climber variation with deeper oblique activation.', desc:'From high plank, draw one knee under your body toward the opposite elbow. Return fully before switching.', mod:'Do from forearm plank.' },
        { name:'Plank Hip Dips', ids:['aZ0M2nn1f8M'], stat:'3 × 20 reps (10/side)', rest:'30–45 sec', why:'Rotational core move that trains the obliques in a controlled way.', desc:'Forearm plank. Rotate hips to dip one side toward the floor, return to centre, then the other side.', mod:'Keep the dip small and slow.' },
      ]},
      /* C3 */ { alts: [
        { name:'Dead Bug', ids:['jbWmbhElf3Q'], stat:'3 × 8 reps/side', rest:'30–45 sec', why:'Trains the core to resist extension — most protective of the lower back.', desc:'Lie on back, arms up, knees at 90°. Slowly lower right arm and extend left leg. Back stays flat. Return.', mod:'Extend only the arm to start.' },
        { name:'Bird Dog', ids:['k2azbhhuKuM'], stat:'3 × 8 reps/side', rest:'30–45 sec', why:'Core stability and lower back health — extends opposite limbs while preventing rotation.', desc:'On all fours, extend opposite arm and leg simultaneously. Hold 2 sec. Maintain a perfectly level back.', mod:'Just slide the foot back rather than lifting it.' },
        { name:'Hollow Body Hold', ids:['EsnM8eBtazU'], stat:'3 × 20 sec', rest:'30–45 sec', why:'Full-body tension drill that builds the deep core strength needed for all advanced moves.', desc:'Lie on back. Press lower back into floor. Raise legs to 45° and shoulders slightly off floor, arms overhead. Hold.', mod:'Bend knees and keep arms by your sides.' },
      ]},
      /* D1 */ { alts: [
        { name:'Burpees', ids:['qLBImHhCXSw'], stat:'3 × 8 reps', rest:'30–45 sec', why:'Highest calorie-burn bodyweight move — power, endurance and every muscle.', desc:'Squat, plant hands, jump back to plank, push-up optional, jump forward, stand and jump overhead.', mod:'Step back one at a time — skip the jump.' },
        { name:'Half Burpees', ids:['XzCDSM0cdro'], stat:'3 × 10 reps', rest:'30–45 sec', why:'Full-body conditioning with less impact — removes the final jump.', desc:'Squat, hands to floor, jump both feet back to plank, jump feet forward, stand. No overhead jump.', mod:'Step out and in instead of jumping.' },
        { name:'Squat Thrusts', ids:['EAGd4XwCJ-M'], stat:'3 × 10 reps', rest:'30–45 sec', why:'Core and leg combo with high metabolic demand, gentler on shoulders.', desc:'From standing, drop hands to floor and shoot legs back to plank, then jump them forward and stand.', mod:'Step feet back and forward.' },
      ]},
      /* D2 */ { alts: [
        { name:'Jump Squats', ids:['BRfxI2Es2lE'], stat:'3 × 10 reps', rest:'30–45 sec', why:'Plyometric move that recruits fast-twitch fibres for power.', desc:'Squat then explode upward. Land softly with bent knees, absorbing into another squat. Feet hip-width.', mod:'Slow squat with 3-sec hold at the bottom instead.' },
        { name:'Box Jumps (floor)', ids:['k7dmYdknbac'], stat:'3 × 8 reps', rest:'30–45 sec', why:'Explosive lower body power builder with full triple extension.', desc:'Stand, swing arms back, then drive arms up and jump forward landing softly. Step back. No box needed.', mod:'Do a broad jump with a small hop.' },
        { name:'Pulse Squats', ids:['QV0KBKANprw'], stat:'3 × 15 reps', rest:'30–45 sec', why:'Constant time-under-tension builds muscular endurance in the quads and glutes.', desc:'Drop into a squat, then pulse 2 inches up and down 3 times before rising fully. That is 1 rep.', mod:'Reduce pulse count to 1 per rep.' },
      ]},
      /* D3 */ { alts: [
        { name:'Bear Crawl (forward/back)', ids:['ZnYa6e_MCvQ'], stat:'3 × 10 steps each way', rest:'30–45 sec', why:'Full-body coordination drill — shoulders, core and hips all fire together.', desc:'Knees 2 inches off floor. Move opposite hand and foot simultaneously. Stay slow and controlled.', mod:'Larger steps, slower pace.' },
        { name:'Inchworm Push-Up', ids:['QVX9z7mUn1Y'], stat:'3 × 6 reps', rest:'30–45 sec', why:'Chains together a hamstring stretch, shoulder warm-up and push-up in one.', desc:'Hinge, walk hands to a plank, do one push-up, walk feet to hands, stand. That is 1 rep.', mod:'Skip the push-up at the end.' },
        { name:'Sprawls', ids:['jdYw85tvskA'], stat:'3 × 10 reps', rest:'30–45 sec', why:'Athletic movement pattern that spikes heart rate and trains explosive hips.', desc:'From standing, drop hands to floor and sprawl hips flat to the ground. Press back to standing explosively.', mod:'Step back rather than sprawling.' },
      ]},
    ]
  },

  cool: {
    title: 'Cool-Down',
    sub: 'Hold 30–45 sec per side · Breathe deeply',
    accent: 'var(--cool)',
    exercises: [
      { alts: [
        { name:'Standing Quad Stretch', ids:['Uwwuc8pRRc0'], stat:'30–45 sec/side', why:'Releases quads and hip flexors taxed during squats and lunges.', desc:'Stand on one leg, pull opposite heel toward glute. Push hip slightly forward. Hold a wall if needed.' },
        { name:'Lying Quad Stretch', ids:['98I9C78aBZg'], stat:'30–45 sec/side', why:'Same target but removes the balance demand.', desc:'Lie on your side, pull top heel toward glutes with the top hand. Keep knees together.' },
      ]},
      { alts: [
        { name:'Figure-4 Hip Stretch', ids:['Xb5gHdYtHnk'], stat:'30–45 sec/side', why:'Releases glutes and piriformis worked during all leg exercises.', desc:'Lie on back. Cross ankle over knee forming a figure-4. Pull thigh toward chest.' },
        { name:'Seated Pigeon', ids:['S0srEVzPp5A'], stat:'30–45 sec/side', why:'Deep glute and hip external rotator stretch.', desc:'Sit on floor, bend one leg in front of you, extend the other behind. Sit tall or fold forward gently.' },
      ]},
      { alts: [
        { name:'Supine Hamstring Stretch', ids:['inLULJztZh0'], stat:'30–45 sec/side', why:'Lengthens hamstrings after lower-body loading.', desc:'Extend one leg toward ceiling, hold behind thigh. Flex foot to deepen the stretch.' },
        { name:'Standing Hamstring Stretch', ids:['POz90rMBJW4'], stat:'30–45 sec/side', why:'Same muscles, easier to ease into if the floor stretch is intense.', desc:'Stand, hinge forward and reach toward toes. Bend one knee slightly if needed. Hold.' },
      ]},
      { alts: [
        { name:"Child's Pose", ids:['_ZX_zTOBgp8'], stat:'45 sec', why:'Decompresses the lower back and stretches lats.', desc:'Kneel, sit back toward heels, arms reaching long. Breathe into your lower back.' },
        { name:'Thread the Needle', ids:['rlac1t_QQJM'], stat:'30 sec/side', why:'Opens thoracic rotation and shoulder — great after push work.', desc:'On all fours, slide one arm under your body along the floor. Lower shoulder toward ground, hold.' },
      ]},
      { alts: [
        { name:'Chest Opener Stretch', ids:['16qCwSMGqx4'], stat:'30–45 sec/side', why:'Opens pec minor and front shoulder after pushing movements.', desc:'Forearm on a wall at 90°. Slowly rotate body away until you feel the chest stretch.' },
        { name:'Doorway Chest Stretch', ids:['8wiZpixdHPU'], stat:'30–45 sec', why:'Both sides simultaneously — efficient chest opener.', desc:'Stand in a doorway or corner. Press both forearms on the frame, step forward until you feel a chest stretch.' },
      ]},
      { alts: [
        { name:'Seated Thoracic Twist', ids:['OQhyJ7Oi55Q'], stat:'30–45 sec/side', why:'Restores thoracic rotation compressed during pushing movements.', desc:'Sit with legs extended. Bend one knee, rotate torso toward it. Sit tall throughout.' },
        { name:'Supine Spinal Twist', ids:['B2YBWYQ8hDE'], stat:'30 sec/side', why:'Passive rotation that releases the thoracic and lumbar spine.', desc:'Lie on back. Pull one knee across your body to the opposite side, arms out. Keep shoulders flat.' },
      ]},
      { alts: [
        { name:'90/90 Hip Stretch', ids:['nWBKgtVjIjE'], stat:'30–45 sec/side', why:'Opens hip flexors, glutes and adductors in one position.', desc:"Both legs at 90°. Sit tall. Windshield-wiper to switch sides." },
        { name:'Butterfly Stretch', ids:['cfJcO7gi3zw'], stat:'45 sec', why:'Opens inner thighs and hip flexors — great after squat and lunge work.', desc:'Sit, bring soles together, let knees fall out. Hold ankles, sit tall. Gently press elbows on inner knees.' },
      ]},
    ]
  },

  finisher: {
    title: '⚡ Optional Finisher',
    sub: 'Only add this if you felt great today',
    accent: 'var(--warm)',
    exercises: [
      { alts: [
        { name:'Tabata Mountain Climbers', ids:['Y3iJJsLe6rM'], stat:'4 × 20 sec on / 10 sec off', why:'Research-backed HIIT protocol — spikes VO₂ max and calorie burn.', desc:'20 sec max-effort mountain climbers, 10 sec rest — 4 rounds. Use the ⏱ timer set to 20 sec.', mod:'Skip if your form dropped during the main workout.' },
        { name:'Tabata Squats', ids:['8hWTZW_fH64'], stat:'4 × 20 sec on / 10 sec off', why:'HIIT with the lower body — keeps metabolic demand high.', desc:'20 sec of fast bodyweight squats, 10 sec rest — 4 rounds. Full depth, controlled landing.', mod:'Reduce rep speed for the last round if needed.' },
      ]},
    ]
  },
  },
};

/* ══════════════════════════
   GYM PHASES DATA
══════════════════════════ */
const gymPhases = {
  Saturday: {
    warmup: {
      title: 'Warm-Up',
      sub: '8–10 min · No rest — keep moving',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Marching in Place', ids:['Ac8M_Osjy6s'], stat:'60 sec', why:'Raises heart rate and wakes up hip flexors.', desc:'Drive knees up alternately while pumping arms. Stand tall, brace core, land softly.' },
          { name:'High Knees', ids:['DfjpR6dzLVg'], stat:'60 sec', why:'Cardio activation with stronger hip flexor engagement.', desc:'Run on the spot driving knees toward your chest. Pump arms in sync, stay on the balls of your feet.' },
          { name:'Butt Kicks', ids:['lVZi-AwxLPo'], stat:'60 sec', why:'Activates hamstrings and keeps heart rate up.', desc:'Jog on the spot, kicking heels up toward your glutes. Keep torso upright.' },
        ]},
        { alts: [
          { name:'Arm Circles', ids:['D40wm6vbI_0'], stat:'30 sec each direction', why:'Mobilises shoulder joints and warms the rotator cuff.', desc:'Arms straight out. Start small then widen. Shoulders stay down. Switch direction halfway.' },
          { name:'Shoulder Rolls', ids:['X7NtgY9kCCM'], stat:'30 sec forward / 30 sec back', why:'Releases upper trapezius and prepares shoulder girdle.', desc:'Big slow rolls forward, then reverse. Let arms hang loose. Feel the shoulder blades moving.' },
        ]},
        { alts: [
          { name:'Hip Circles', ids:['fhosmniT48I'], stat:'30 sec each direction', why:'Lubricates hip joints and activates glutes.', desc:'Feet shoulder-width, hands on hips. Draw large slow circles. Upper body stays still.' },
          { name:'Hip Hinges', ids:['sinpFajtRPw'], stat:'10 reps', why:'Activates posterior chain and teaches the hinge pattern.', desc:'Feet hip-width, soft knees. Push hips back as torso tips forward. Feel hamstrings load, then drive hips forward to stand.' },
          { name:'Standing Side Bends', ids:['RfuiraEgKcY'], stat:'10 reps each side', why:'Mobilises the lateral spine and obliques.', desc:'Feet shoulder-width, arm overhead. Bend slowly to one side until you feel a lateral stretch, return. Alternate sides.' },
        ]},
        { alts: [
          { name:'Leg Swings', ids:['difYoBtZi2s'], stat:'10 reps each leg', why:'Dynamically stretches hamstrings and adductors.', desc:'Hold a wall. Swing one leg forward and back in a controlled arc.' },
          { name:'Standing Knee Hugs', ids:['ovgnoeaaZRI'], stat:'10 reps each leg', why:'Stretches glutes and primes balance.', desc:'Lift one knee to chest, hug with both hands. Hold 1 sec. Alternate legs while walking in place.' },
          { name:'Ankle Rolls', ids:['dV5opNYJvQE'], stat:'10 reps each foot', why:'Mobilises ankle joints and prevents lower-leg tightness.', desc:'Lift one foot, trace slow circles with toes — 10 one way, 10 the other. Repeat other foot.' },
        ]},
        { alts: [
          { name:'Inchworms', ids:['pv_8CdDPAAk'], stat:'6 reps', why:'Activates the full posterior chain, core and shoulders.', desc:'Hinge forward, walk hands to a plank. Pause, then walk feet back to hands and stand.' },
          { name:'Bear Crawl', ids:['qpaxI2m75RY'], stat:'10 steps forward / 10 back', why:'Full-body coordination, core and shoulder stability.', desc:'On hands and knees, lift knees 2 inches off floor. Move opposite hand and foot together, staying low.' },
          { name:'Downward Dog Pedals', ids:['tZtlAceyqoA'], stat:'60 sec', why:'Stretches calves and hamstrings while warming the shoulders.', desc:'Downward dog position. Alternate pressing one heel toward the floor at a time, hold 2 sec each side.' },
        ]},
        { alts: [
          { name:"World's Greatest Stretch", ids:['-CiWQ2IvY34'], stat:'3 reps per side', why:"Opens hip flexors, thoracic spine and groin in one move.", desc:'Deep lunge, same-side hand beside front foot, rotate top arm toward ceiling. Hold 2 sec.' },
          { name:'Spiderman Lunge', ids:['R1UvsRbMTGQ'], stat:'5 reps per side', why:'Combines hip flexor stretch with thoracic rotation.', desc:'Step into a deep lunge, drop same-side elbow to the floor, then rotate and reach that arm to the ceiling.' },
          { name:'Hip Flexor Rock', ids:['zm6uf3E3ZfI'], stat:'8 reps per side', why:'Dynamically loosens tight hip flexors and improves lunge depth.', desc:'Half-kneeling lunge. Rock hips forward gently until you feel the front hip stretch. Rock back. Repeat rhythmically.' },
        ]},
        { alts: [
          { name:'Jumping Jacks', ids:['CWpmIW6l-YA'], stat:'60 sec', why:'Full-body cardio activation that raises core temperature.', desc:'Jump feet wide as arms go overhead, then return. Stay light on feet.' },
          { name:'Step Jacks', ids:['JHdVMkRBuRA'], stat:'60 sec', why:'Low-impact alternative that still raises heart rate.', desc:'Step one foot out wide as arms go up, bring it back, then alternate feet. Same rhythm as a jumping jack — no jump.' },
          { name:'Skaters', ids:['Jx2KXGbQkYM'], stat:'60 sec', why:'Lateral movement pattern that warms hips and improves coordination.', desc:'Leap sideways onto one foot, swinging the other leg behind. Touch hand to foot. Leap the other way.' },
        ]},
      ]
    },

    main: {
      title: 'Main Workout',
      sub: '3 rounds · 30–45 sec rest between exercises · 90 sec between rounds',
      accent: 'var(--main)',
      blocks: [
        { label:'🔵 BLOCK A — LOWER BODY & PULL', start:0, end:1 },
        { label:'🔴 BLOCK B — UPPER BODY PUSH',   start:2, end:3 },
        { label:'🟢 BLOCK C — ARMS & ACCESSORY',  start:4, end:5 }
      ],

      exercises: [
        /* A1 */ { alts: [
          { name:'Leg Extension', ids:['m0FOpMEgero'], stat:'3 × 12–15 reps', rest:'60 sec', why:'Isolated quad development and knee stability through a full range of motion.', desc:'Sit back against the pad. Extend legs upward until straight, squeezing quads at the top. Lower with control.', mod:'Focus on a slow 3-second eccentric (lowering) phase.' },
        ]},
        /* A2 */ { alts: [
          { name:'Lat Pulldown', ids:['51ql2-2kLfA'], stat:'3 × 10–12 reps', rest:'60 sec', why:'Primary vertical pull for back width, targeting the latissimus dorsi and biceps.', desc:'Sit with thighs under pads. Pull the bar down to your upper chest while driving elbows toward your hips. Slowly return.', mod:'Use a wider grip to emphasize the outer lats.' },
        ]},
        /* B1 */ { alts: [
          { name:'Decline Chest Press', ids:['Hryz1TsWMck'], stat:'3 × 10–12 reps', rest:'60–90 sec', why:'Targets the lower pectoral fibers to build a defined and powerful chest.', desc:'Lie on the decline bench. Press the weight upward until arms are locked. Lower slowly to the lower chest level.', mod:'If using dumbbells, keep palms facing slightly inward to protect shoulders.' },
        ]},
        /* B2 */ { alts: [
          { name:'Shoulder Press', ids:['WvLMauqrnK8'], stat:'3 × 10–12 reps', rest:'60–90 sec', why:'Foundational overhead movement for deltoid size and upper body pressing strength.', desc:'Sit upright. Press the weight from shoulder height to full lockout overhead. Keep core tight to avoid arching back.', mod:'Perform standing to increase core stability requirements.' },
        ]},
        /* C1 */ { alts: [
          { name:'Triceps Pushdown', ids:['6Fzep104f0s'], stat:'3 × 12–15 reps', rest:'45–60 sec', why:'Isolates the triceps for arm thickness and lockout strength in big presses.', desc:'Keep elbows tucked at your sides. Push the bar/rope down toward your thighs until arms are straight. Squeeze and return.', mod:'Lean slightly forward for a better range of motion.' },
        ]},
        /* C2 */ { alts: [
          { name:'Biceps Curl Machine', ids:['0y4tdUNPdlE'], stat:'3 × 12–15 reps', rest:'45–60 sec', why:'Provides constant tension on the biceps for maximum hypertrophy and peak development.', desc:'Align elbows with the machine pivot point. Curl the handles toward your shoulders. Resist the weight on the way down.', mod:'Pause for 1 second at the top of the contraction.' },
        ]}
      ]
    },

    cool: {
      title: 'Cool-Down',
      sub: 'Hold 30–45 sec per side · Breathe deeply',
      accent: 'var(--cool)',
      exercises: [
        { alts: [
          { name:'Standing Quad Stretch', ids:['Uwwuc8pRRc0'], stat:'30–45 sec/side', why:'Releases quads and hip flexors taxed during squats and lunges.', desc:'Stand on one leg, pull opposite heel toward glute. Push hip slightly forward. Hold a wall if needed.' },
          { name:'Lying Quad Stretch', ids:['98I9C78aBZg'], stat:'30–45 sec/side', why:'Same target but removes the balance demand.', desc:'Lie on your side, pull top heel toward glutes with the top hand. Keep knees together.' },
        ]},
        { alts: [
          { name:'Figure-4 Hip Stretch', ids:['Xb5gHdYtHnk'], stat:'30–45 sec/side', why:'Releases glutes and piriformis worked during all leg exercises.', desc:'Lie on back. Cross ankle over knee forming a figure-4. Pull thigh toward chest.' },
          { name:'Seated Pigeon', ids:['S0srEVzPp5A'], stat:'30–45 sec/side', why:'Deep glute and hip external rotator stretch.', desc:'Sit on floor, bend one leg in front of you, extend the other behind. Sit tall or fold forward gently.' },
        ]},
        { alts: [
          { name:'Supine Hamstring Stretch', ids:['inLULJztZh0'], stat:'30–45 sec/side', why:'Lengthens hamstrings after lower-body loading.', desc:'Extend one leg toward ceiling, hold behind thigh. Flex foot to deepen the stretch.' },
          { name:'Standing Hamstring Stretch', ids:['POz90rMBJW4'], stat:'30–45 sec/side', why:'Same muscles, easier to ease into if the floor stretch is intense.', desc:'Stand, hinge forward and reach toward toes. Bend one knee slightly if needed. Hold.' },
        ]},
        { alts: [
          { name:"Child's Pose", ids:['_ZX_zTOBgp8'], stat:'45 sec', why:'Decompresses the lower back and stretches lats.', desc:'Kneel, sit back toward heels, arms reaching long. Breathe into your lower back.' },
          { name:'Thread the Needle', ids:['rlac1t_QQJM'], stat:'30 sec/side', why:'Opens thoracic rotation and shoulder — great after push work.', desc:'On all fours, slide one arm under your body along the floor. Lower shoulder toward ground, hold.' },
        ]},
        { alts: [
          { name:'Chest Opener Stretch', ids:['16qCwSMGqx4'], stat:'30–45 sec/side', why:'Opens pec minor and front shoulder after pushing movements.', desc:'Forearm on a wall at 90°. Slowly rotate body away until you feel the chest stretch.' },
          { name:'Doorway Chest Stretch', ids:['8wiZpixdHPU'], stat:'30–45 sec', why:'Both sides simultaneously — efficient chest opener.', desc:'Stand in a doorway or corner. Press both forearms on the frame, step forward until you feel a chest stretch.' },
        ]},
        { alts: [
          { name:'Seated Thoracic Twist', ids:['OQhyJ7Oi55Q'], stat:'30–45 sec/side', why:'Restores thoracic rotation compressed during pushing movements.', desc:'Sit with legs extended. Bend one knee, rotate torso toward it. Sit tall throughout.' },
          { name:'Supine Spinal Twist', ids:['B2YBWYQ8hDE'], stat:'30 sec/side', why:'Passive rotation that releases the thoracic and lumbar spine.', desc:'Lie on back. Pull one knee across your body to the opposite side, arms out. Keep shoulders flat.' },
        ]},
        { alts: [
          { name:'90/90 Hip Stretch', ids:['nWBKgtVjIjE'], stat:'30–45 sec/side', why:'Opens hip flexors, glutes and adductors in one position.', desc:"Both legs at 90°. Sit tall. Windshield-wiper to switch sides." },
          { name:'Butterfly Stretch', ids:['cfJcO7gi3zw'], stat:'45 sec', why:'Opens inner thighs and hip flexors — great after squat and lunge work.', desc:'Sit, bring soles together, let knees fall out. Hold ankles, sit tall. Gently press elbows on inner knees.' },
        ]},
      ]
    },

    finisher: {
      title: '⚡ Optional Finisher',
      sub: 'Only add this if you felt great today',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Tabata Mountain Climbers', ids:['Y3iJJsLe6rM'], stat:'4 × 20 sec on / 10 sec off', why:'Research-backed HIIT protocol — spikes VO₂ max and calorie burn.', desc:'20 sec max-effort mountain climbers, 10 sec xrest — 4 rounds. Use the ⏱ timer set to 20 sec.', mod:'Skip if your form dropped during the main workout.' },
          { name:'Tabata Squats', ids:['8hWTZW_fH64'], stat:'4 × 20 sec on / 10 sec off', why:'HIIT with the lower body — keeps metabolic demand high.', desc:'20 sec of fast bodyweight squats, 10 sec rest — 4 rounds. Full depth, controlled landing.', mod:'Reduce rep speed for the last round if needed.' },
        ]},
      ]
    },
  },

  Sunday: {
    warmup: {
      title: 'Warm-Up',
      sub: '8–10 min · No rest — keep moving',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Marching in Place', ids:['Ac8M_Osjy6s'], stat:'60 sec', why:'Raises heart rate and wakes up hip flexors.', desc:'Drive knees up alternately while pumping arms. Stand tall, brace core, land softly.' },
          { name:'High Knees', ids:['DfjpR6dzLVg'], stat:'60 sec', why:'Cardio activation with stronger hip flexor engagement.', desc:'Run on the spot driving knees toward your chest. Pump arms in sync, stay on the balls of your feet.' },
          { name:'Butt Kicks', ids:['lVZi-AwxLPo'], stat:'60 sec', why:'Activates hamstrings and keeps heart rate up.', desc:'Jog on the spot, kicking heels up toward your glutes. Keep torso upright.' },
        ]},
        { alts: [
          { name:'Arm Circles', ids:['D40wm6vbI_0'], stat:'30 sec each direction', why:'Mobilises shoulder joints and warms the rotator cuff.', desc:'Arms straight out. Start small then widen. Shoulders stay down. Switch direction halfway.' },
          { name:'Shoulder Rolls', ids:['X7NtgY9kCCM'], stat:'30 sec forward / 30 sec back', why:'Releases upper trapezius and prepares shoulder girdle.', desc:'Big slow rolls forward, then reverse. Let arms hang loose. Feel the shoulder blades moving.' },
        ]},
        { alts: [
          { name:'Hip Circles', ids:['fhosmniT48I'], stat:'30 sec each direction', why:'Lubricates hip joints and activates glutes.', desc:'Feet shoulder-width, hands on hips. Draw large slow circles. Upper body stays still.' },
          { name:'Hip Hinges', ids:['sinpFajtRPw'], stat:'10 reps', why:'Activates posterior chain and teaches the hinge pattern.', desc:'Feet hip-width, soft knees. Push hips back as torso tips forward. Feel hamstrings load, then drive hips forward to stand.' },
          { name:'Standing Side Bends', ids:['RfuiraEgKcY'], stat:'10 reps each side', why:'Mobilises the lateral spine and obliques.', desc:'Feet shoulder-width, arm overhead. Bend slowly to one side until you feel a lateral stretch, return. Alternate sides.' },
        ]},
        { alts: [
          { name:'Leg Swings', ids:['difYoBtZi2s'], stat:'10 reps each leg', why:'Dynamically stretches hamstrings and adductors.', desc:'Hold a wall. Swing one leg forward and back in a controlled arc.' },
          { name:'Standing Knee Hugs', ids:['ovgnoeaaZRI'], stat:'10 reps each leg', why:'Stretches glutes and primes balance.', desc:'Lift one knee to chest, hug with both hands. Hold 1 sec. Alternate legs while walking in place.' },
          { name:'Ankle Rolls', ids:['dV5opNYJvQE'], stat:'10 reps each foot', why:'Mobilises ankle joints and prevents lower-leg tightness.', desc:'Lift one foot, trace slow circles with toes — 10 one way, 10 the other. Repeat other foot.' },
        ]},
        { alts: [
          { name:'Inchworms', ids:['pv_8CdDPAAk'], stat:'6 reps', why:'Activates the full posterior chain, core and shoulders.', desc:'Hinge forward, walk hands to a plank. Pause, then walk feet back to hands and stand.' },
          { name:'Bear Crawl', ids:['qpaxI2m75RY'], stat:'10 steps forward / 10 back', why:'Full-body coordination, core and shoulder stability.', desc:'On hands and knees, lift knees 2 inches off floor. Move opposite hand and foot together, staying low.' },
          { name:'Downward Dog Pedals', ids:['tZtlAceyqoA'], stat:'60 sec', why:'Stretches calves and hamstrings while warming the shoulders.', desc:'Downward dog position. Alternate pressing one heel toward the floor at a time, hold 2 sec each side.' },
        ]},
        { alts: [
          { name:"World's Greatest Stretch", ids:['-CiWQ2IvY34'], stat:'3 reps per side', why:"Opens hip flexors, thoracic spine and groin in one move.", desc:'Deep lunge, same-side hand beside front foot, rotate top arm toward ceiling. Hold 2 sec.' },
          { name:'Spiderman Lunge', ids:['R1UvsRbMTGQ'], stat:'5 reps per side', why:'Combines hip flexor stretch with thoracic rotation.', desc:'Step into a deep lunge, drop same-side elbow to the floor, then rotate and reach that arm to the ceiling.' },
          { name:'Hip Flexor Rock', ids:['zm6uf3E3ZfI'], stat:'8 reps per side', why:'Dynamically loosens tight hip flexors and improves lunge depth.', desc:'Half-kneeling lunge. Rock hips forward gently until you feel the front hip stretch. Rock back. Repeat rhythmically.' },
        ]},
        { alts: [
          { name:'Jumping Jacks', ids:['CWpmIW6l-YA'], stat:'60 sec', why:'Full-body cardio activation that raises core temperature.', desc:'Jump feet wide as arms go overhead, then return. Stay light on feet.' },
          { name:'Step Jacks', ids:['JHdVMkRBuRA'], stat:'60 sec', why:'Low-impact alternative that still raises heart rate.', desc:'Step one foot out wide as arms go up, bring it back, then alternate feet. Same rhythm as a jumping jack — no jump.' },
          { name:'Skaters', ids:['Jx2KXGbQkYM'], stat:'60 sec', why:'Lateral movement pattern that warms hips and improves coordination.', desc:'Leap sideways onto one foot, swinging the other leg behind. Touch hand to foot. Leap the other way.' },
        ]},
      ]
    },

    main: {
      title: 'Main Workout',
      sub: 'Sets & reps with equipment',
      accent: 'var(--main)',
      blocks: [
        { label:'🔵 BLOCK A — HORIZONTAL PUSH & PULL (TORSO)', start:0, end:1 },
        { label:'🔴 BLOCK B — SHOULDER DOMINANT (STRENGTH)',   start:2, end:3 },
        { label:'🟢 BLOCK C — ARM & WRIST ACCESSORY',        start:4, end:5 }
      ],

      exercises: [
        /* A1 */ { alts: [
          { name:'Chest Press', ids:['hkU6fSHcslw'], stat:'3 × 10–12 reps', rest:'60–90 sec', why:'Builds foundational upper-body pushing power, targeting the chest, shoulders, and triceps.', desc:'Sit with back flat against the pad. Push the handles forward until arms are extended, then return slowly to the starting position.', mod:'Focus on squeezing the chest at the peak of the movement.' },
        ]},
        /* A2 */ { alts: [
          { name:'Seated Row', ids:['UCXxvVItLoM'], stat:'3 × 10–12 reps', rest:'60–90 sec', why:'Essential horizontal pull for back thickness and postural health, targeting the lats and rhomboids.', desc:'Sit with feet on braces and slight knee bend. Pull the handle toward your midsection, driving elbows back and squeezing shoulder blades together.', mod:'Keep your torso stationary; avoid rocking back and forth.' },
        ]},
        /* B1 */ { alts: [
          { name:'Shoulder Press', ids:['WvLMauqrnK8'], stat:'3 × 8–10 reps', rest:'60–90 sec', why:'The gold standard for overhead pressing strength and broad shoulder development.', desc:'Press the handles or weight vertically from shoulder height to full extension. Control the descent back to the starting point.', mod:'Keep your core tight and feet planted to ensure stability.' },
        ]},
        /* B2 */ { alts: [
          { name:'Rear Delt Fly', ids:['qBq_7mUvOxQ'], stat:'3 × 12–15 reps', rest:'45–60 sec', why:'Isolates the rear deltoids to round out the shoulder and improve shoulder joint stability.', desc:'Adjust seat so handles are at shoulder height. Pull handles back in a wide arc until arms are out to the side. Squeeze the back of the shoulder.', mod:'Avoid using momentum or shrugging your shoulders during the rep.' },
        ]},
        /* C1 */ { alts: [
          { name:'Cable Curl', ids:['opFVuRi_3b8'], stat:'3 × 12–15 reps', rest:'45–60 sec', why:'Maintains constant tension on the biceps throughout the entire range of motion for better growth.', desc:'Stand tall holding the cable bar. Curl toward your shoulders while keeping elbows pinned to your sides. Lower with control.', mod:'Use a straight bar or EZ-bar attachment based on wrist comfort.' },
        ]},
        /* C2 */ { alts: [
          { name:'Reverse Wrist Curl', ids:['hks_Bqtq6rg'], stat:'3 × 15–20 reps', rest:'45 sec', why:'Targets the forearm extensors to build grip strength and balanced forearm aesthetics.', desc:'Rest forearms on your thighs or a bench with palms facing down. Lift the back of your hand toward your ceiling using only your wrists.', mod:'Use a light weight and focus on a high-rep, high-burn finish.' },
        ]}
      ]
    },

    cool: {
      title: 'Cool-Down',
      sub: 'Hold 30–45 sec per side · Breathe deeply',
      accent: 'var(--cool)',
      exercises: [
        { alts: [
          { name:'Standing Quad Stretch', ids:['Uwwuc8pRRc0'], stat:'30–45 sec/side', why:'Releases quads and hip flexors taxed during squats and lunges.', desc:'Stand on one leg, pull opposite heel toward glute. Push hip slightly forward. Hold a wall if needed.' },
          { name:'Lying Quad Stretch', ids:['98I9C78aBZg'], stat:'30–45 sec/side', why:'Same target but removes the balance demand.', desc:'Lie on your side, pull top heel toward glutes with the top hand. Keep knees together.' },
        ]},
        { alts: [
          { name:'Figure-4 Hip Stretch', ids:['Xb5gHdYtHnk'], stat:'30–45 sec/side', why:'Releases glutes and piriformis worked during all leg exercises.', desc:'Lie on back. Cross ankle over knee forming a figure-4. Pull thigh toward chest.' },
          { name:'Seated Pigeon', ids:['S0srEVzPp5A'], stat:'30–45 sec/side', why:'Deep glute and hip external rotator stretch.', desc:'Sit on floor, bend one leg in front of you, extend the other behind. Sit tall or fold forward gently.' },
        ]},
        { alts: [
          { name:'Supine Hamstring Stretch', ids:['inLULJztZh0'], stat:'30–45 sec/side', why:'Lengthens hamstrings after lower-body loading.', desc:'Extend one leg toward ceiling, hold behind thigh. Flex foot to deepen the stretch.' },
          { name:'Standing Hamstring Stretch', ids:['POz90rMBJW4'], stat:'30–45 sec/side', why:'Same muscles, easier to ease into if the floor stretch is intense.', desc:'Stand, hinge forward and reach toward toes. Bend one knee slightly if needed. Hold.' },
        ]},
        { alts: [
          { name:"Child's Pose", ids:['_ZX_zTOBgp8'], stat:'45 sec', why:'Decompresses the lower back and stretches lats.', desc:'Kneel, sit back toward heels, arms reaching long. Breathe into your lower back.' },
          { name:'Thread the Needle', ids:['rlac1t_QQJM'], stat:'30 sec/side', why:'Opens thoracic rotation and shoulder — great after push work.', desc:'On all fours, slide one arm under your body along the floor. Lower shoulder toward ground, hold.' },
        ]},
        { alts: [
          { name:'Chest Opener Stretch', ids:['16qCwSMGqx4'], stat:'30–45 sec/side', why:'Opens pec minor and front shoulder after pushing movements.', desc:'Forearm on a wall at 90°. Slowly rotate body away until you feel the chest stretch.' },
          { name:'Doorway Chest Stretch', ids:['8wiZpixdHPU'], stat:'30–45 sec', why:'Both sides simultaneously — efficient chest opener.', desc:'Stand in a doorway or corner. Press both forearms on the frame, step forward until you feel a chest stretch.' },
        ]},
        { alts: [
          { name:'Seated Thoracic Twist', ids:['OQhyJ7Oi55Q'], stat:'30–45 sec/side', why:'Restores thoracic rotation compressed during pushing movements.', desc:'Sit with legs extended. Bend one knee, rotate torso toward it. Sit tall throughout.' },
          { name:'Supine Spinal Twist', ids:['B2YBWYQ8hDE'], stat:'30 sec/side', why:'Passive rotation that releases the thoracic and lumbar spine.', desc:'Lie on back. Pull one knee across your body to the opposite side, arms out. Keep shoulders flat.' },
        ]},
        { alts: [
          { name:'90/90 Hip Stretch', ids:['nWBKgtVjIjE'], stat:'30–45 sec/side', why:'Opens hip flexors, glutes and adductors in one position.', desc:"Both legs at 90°. Sit tall. Windshield-wiper to switch sides." },
          { name:'Butterfly Stretch', ids:['cfJcO7gi3zw'], stat:'45 sec', why:'Opens inner thighs and hip flexors — great after squat and lunge work.', desc:'Sit, bring soles together, let knees fall out. Hold ankles, sit tall. Gently press elbows on inner knees.' },
        ]},
      ]
    },

    finisher: {
      title: '⚡ Optional Finisher',
      sub: 'Only add this if you felt great today',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Tabata Mountain Climbers', ids:['Y3iJJsLe6rM'], stat:'4 × 20 sec on / 10 sec off', why:'Research-backed HIIT protocol — spikes VO₂ max and calorie burn.', desc:'20 sec max-effort mountain climbers, 10 sec xrest — 4 rounds. Use the ⏱ timer set to 20 sec.', mod:'Skip if your form dropped during the main workout.' },
          { name:'Tabata Squats', ids:['8hWTZW_fH64'], stat:'4 × 20 sec on / 10 sec off', why:'HIIT with the lower body — keeps metabolic demand high.', desc:'20 sec of fast bodyweight squats, 10 sec rest — 4 rounds. Full depth, controlled landing.', mod:'Reduce rep speed for the last round if needed.' },
        ]},
      ]
    },
  },

  Monday: {
    warmup: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },

    main: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--main)',
      blocks: [],
      exercises: [],
    },

    cool: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--cool)',
      exercises: [],
    },

    finisher: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },
  },

  Tuesday: {
    warmup: {
      title: 'Warm-Up',
      sub: '8–10 min · No rest — keep moving',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Marching in Place', ids:['Ac8M_Osjy6s'], stat:'60 sec', why:'Raises heart rate and wakes up hip flexors.', desc:'Drive knees up alternately while pumping arms. Stand tall, brace core, land softly.' },
          { name:'High Knees', ids:['DfjpR6dzLVg'], stat:'60 sec', why:'Cardio activation with stronger hip flexor engagement.', desc:'Run on the spot driving knees toward your chest. Pump arms in sync, stay on the balls of your feet.' },
          { name:'Butt Kicks', ids:['lVZi-AwxLPo'], stat:'60 sec', why:'Activates hamstrings and keeps heart rate up.', desc:'Jog on the spot, kicking heels up toward your glutes. Keep torso upright.' },
        ]},
        { alts: [
          { name:'Arm Circles', ids:['D40wm6vbI_0'], stat:'30 sec each direction', why:'Mobilises shoulder joints and warms the rotator cuff.', desc:'Arms straight out. Start small then widen. Shoulders stay down. Switch direction halfway.' },
          { name:'Shoulder Rolls', ids:['X7NtgY9kCCM'], stat:'30 sec forward / 30 sec back', why:'Releases upper trapezius and prepares shoulder girdle.', desc:'Big slow rolls forward, then reverse. Let arms hang loose. Feel the shoulder blades moving.' },
        ]},
        { alts: [
          { name:'Hip Circles', ids:['fhosmniT48I'], stat:'30 sec each direction', why:'Lubricates hip joints and activates glutes.', desc:'Feet shoulder-width, hands on hips. Draw large slow circles. Upper body stays still.' },
          { name:'Hip Hinges', ids:['sinpFajtRPw'], stat:'10 reps', why:'Activates posterior chain and teaches the hinge pattern.', desc:'Feet hip-width, soft knees. Push hips back as torso tips forward. Feel hamstrings load, then drive hips forward to stand.' },
          { name:'Standing Side Bends', ids:['RfuiraEgKcY'], stat:'10 reps each side', why:'Mobilises the lateral spine and obliques.', desc:'Feet shoulder-width, arm overhead. Bend slowly to one side until you feel a lateral stretch, return. Alternate sides.' },
        ]},
        { alts: [
          { name:'Leg Swings', ids:['difYoBtZi2s'], stat:'10 reps each leg', why:'Dynamically stretches hamstrings and adductors.', desc:'Hold a wall. Swing one leg forward and back in a controlled arc.' },
          { name:'Standing Knee Hugs', ids:['ovgnoeaaZRI'], stat:'10 reps each leg', why:'Stretches glutes and primes balance.', desc:'Lift one knee to chest, hug with both hands. Hold 1 sec. Alternate legs while walking in place.' },
          { name:'Ankle Rolls', ids:['dV5opNYJvQE'], stat:'10 reps each foot', why:'Mobilises ankle joints and prevents lower-leg tightness.', desc:'Lift one foot, trace slow circles with toes — 10 one way, 10 the other. Repeat other foot.' },
        ]},
        { alts: [
          { name:'Inchworms', ids:['pv_8CdDPAAk'], stat:'6 reps', why:'Activates the full posterior chain, core and shoulders.', desc:'Hinge forward, walk hands to a plank. Pause, then walk feet back to hands and stand.' },
          { name:'Bear Crawl', ids:['qpaxI2m75RY'], stat:'10 steps forward / 10 back', why:'Full-body coordination, core and shoulder stability.', desc:'On hands and knees, lift knees 2 inches off floor. Move opposite hand and foot together, staying low.' },
          { name:'Downward Dog Pedals', ids:['tZtlAceyqoA'], stat:'60 sec', why:'Stretches calves and hamstrings while warming the shoulders.', desc:'Downward dog position. Alternate pressing one heel toward the floor at a time, hold 2 sec each side.' },
        ]},
        { alts: [
          { name:"World's Greatest Stretch", ids:['-CiWQ2IvY34'], stat:'3 reps per side', why:"Opens hip flexors, thoracic spine and groin in one move.", desc:'Deep lunge, same-side hand beside front foot, rotate top arm toward ceiling. Hold 2 sec.' },
          { name:'Spiderman Lunge', ids:['R1UvsRbMTGQ'], stat:'5 reps per side', why:'Combines hip flexor stretch with thoracic rotation.', desc:'Step into a deep lunge, drop same-side elbow to the floor, then rotate and reach that arm to the ceiling.' },
          { name:'Hip Flexor Rock', ids:['zm6uf3E3ZfI'], stat:'8 reps per side', why:'Dynamically loosens tight hip flexors and improves lunge depth.', desc:'Half-kneeling lunge. Rock hips forward gently until you feel the front hip stretch. Rock back. Repeat rhythmically.' },
        ]},
        { alts: [
          { name:'Jumping Jacks', ids:['CWpmIW6l-YA'], stat:'60 sec', why:'Full-body cardio activation that raises core temperature.', desc:'Jump feet wide as arms go overhead, then return. Stay light on feet.' },
          { name:'Step Jacks', ids:['JHdVMkRBuRA'], stat:'60 sec', why:'Low-impact alternative that still raises heart rate.', desc:'Step one foot out wide as arms go up, bring it back, then alternate feet. Same rhythm as a jumping jack — no jump.' },
          { name:'Skaters', ids:['Jx2KXGbQkYM'], stat:'60 sec', why:'Lateral movement pattern that warms hips and improves coordination.', desc:'Leap sideways onto one foot, swinging the other leg behind. Touch hand to foot. Leap the other way.' },
        ]},
      ]
    },

    main: {
      title: 'Main Workout',
      sub: 'Sets & reps with equipment',
      accent: 'var(--main)',
      blocks: [
        { label:'🔵 BLOCK A — TORSO ISOLATION (PUSH & PULL)', start:0, end:1 },
        { label:'🔴 BLOCK B — SHOULDER SCULPT (ACCESSORY)',   start:2, end:2 },
        { label:'🟢 BLOCK C — ARM DEFINITION (BI & TRI)',    start:3, end:4 }
      ],

      exercises: [
        /* A1 */ { alts: [
          { name:'Chest Fly', ids:['0L4mDtSNWR0'], stat:'3 × 12–15 reps', rest:'60 sec', why:'Isolates the pectoral muscles by removing triceps involvement, maximizing chest stretch.', desc:'Sit with back flat. Open arms in a wide arc until you feel a stretch in the chest, then bring handles together.', mod:'Keep a slight bend in the elbows to protect the joints.' },
        ]},
        /* A2 */ { alts: [
          { name:'Low Row', ids:['opjbouBmUWg'], stat:'3 × 10–12 reps', rest:'60 sec', why:'Targets the mid-back and rhomboids to improve posture and back thickness.', desc:'Pull the handles toward your lower stomach. Drive the elbows back and squeeze your shoulder blades together.', mod:'Keep your chest puffed out and avoid leaning too far back.' },
        ]},
        /* B1 */ { alts: [
          { name:'Lateral Raise', ids:['0o07iGKUarI'], stat:'3 × 15–20 reps', rest:'45 sec', why:'The primary movement for building the side deltoid, creating width in the upper body.', desc:'Lead with the elbows to lift the weights out to your sides until they reach shoulder height. Lower slowly.', mod:'Tilt the weights slightly forward as if pouring water from a pitcher.' },
        ]},
        /* C1 */ { alts: [
          { name:'Triceps Pushdown', ids:['6Fzep104f0s'], stat:'3 × 12–15 reps', rest:'45–60 sec', why:'Directly targets the lateral and medial heads of the triceps for fuller-looking arms.', desc:'Keep elbows locked at your ribs. Extend your arms downward until fully straight, then return to 90 degrees.', mod:'Use a rope attachment to allow for a greater range of motion at the bottom.' },
        ]},
        /* C2 */ { alts: [
          { name:'Biceps Curl Machine', ids:['0y4tdUNPdlE'], stat:'3 × 12–15 reps', rest:'45–60 sec', why:'Provides a stable environment to isolate the biceps and maintain peak tension.', desc:'Rest your arms on the pad. Curl the weight toward your face while keeping your shoulders relaxed.', mod:'Pause and squeeze for one second at the top of each rep.' },
        ]}
      ]
    },

    cool: {
      title: 'Cool-Down',
      sub: 'Hold 30–45 sec per side · Breathe deeply',
      accent: 'var(--cool)',
      exercises: [
        { alts: [
          { name:'Standing Quad Stretch', ids:['Uwwuc8pRRc0'], stat:'30–45 sec/side', why:'Releases quads and hip flexors taxed during squats and lunges.', desc:'Stand on one leg, pull opposite heel toward glute. Push hip slightly forward. Hold a wall if needed.' },
          { name:'Lying Quad Stretch', ids:['98I9C78aBZg'], stat:'30–45 sec/side', why:'Same target but removes the balance demand.', desc:'Lie on your side, pull top heel toward glutes with the top hand. Keep knees together.' },
        ]},
        { alts: [
          { name:'Figure-4 Hip Stretch', ids:['Xb5gHdYtHnk'], stat:'30–45 sec/side', why:'Releases glutes and piriformis worked during all leg exercises.', desc:'Lie on back. Cross ankle over knee forming a figure-4. Pull thigh toward chest.' },
          { name:'Seated Pigeon', ids:['S0srEVzPp5A'], stat:'30–45 sec/side', why:'Deep glute and hip external rotator stretch.', desc:'Sit on floor, bend one leg in front of you, extend the other behind. Sit tall or fold forward gently.' },
        ]},
        { alts: [
          { name:'Supine Hamstring Stretch', ids:['inLULJztZh0'], stat:'30–45 sec/side', why:'Lengthens hamstrings after lower-body loading.', desc:'Extend one leg toward ceiling, hold behind thigh. Flex foot to deepen the stretch.' },
          { name:'Standing Hamstring Stretch', ids:['POz90rMBJW4'], stat:'30–45 sec/side', why:'Same muscles, easier to ease into if the floor stretch is intense.', desc:'Stand, hinge forward and reach toward toes. Bend one knee slightly if needed. Hold.' },
        ]},
        { alts: [
          { name:"Child's Pose", ids:['_ZX_zTOBgp8'], stat:'45 sec', why:'Decompresses the lower back and stretches lats.', desc:'Kneel, sit back toward heels, arms reaching long. Breathe into your lower back.' },
          { name:'Thread the Needle', ids:['rlac1t_QQJM'], stat:'30 sec/side', why:'Opens thoracic rotation and shoulder — great after push work.', desc:'On all fours, slide one arm under your body along the floor. Lower shoulder toward ground, hold.' },
        ]},
        { alts: [
          { name:'Chest Opener Stretch', ids:['16qCwSMGqx4'], stat:'30–45 sec/side', why:'Opens pec minor and front shoulder after pushing movements.', desc:'Forearm on a wall at 90°. Slowly rotate body away until you feel the chest stretch.' },
          { name:'Doorway Chest Stretch', ids:['8wiZpixdHPU'], stat:'30–45 sec', why:'Both sides simultaneously — efficient chest opener.', desc:'Stand in a doorway or corner. Press both forearms on the frame, step forward until you feel a chest stretch.' },
        ]},
        { alts: [
          { name:'Seated Thoracic Twist', ids:['OQhyJ7Oi55Q'], stat:'30–45 sec/side', why:'Restores thoracic rotation compressed during pushing movements.', desc:'Sit with legs extended. Bend one knee, rotate torso toward it. Sit tall throughout.' },
          { name:'Supine Spinal Twist', ids:['B2YBWYQ8hDE'], stat:'30 sec/side', why:'Passive rotation that releases the thoracic and lumbar spine.', desc:'Lie on back. Pull one knee across your body to the opposite side, arms out. Keep shoulders flat.' },
        ]},
        { alts: [
          { name:'90/90 Hip Stretch', ids:['nWBKgtVjIjE'], stat:'30–45 sec/side', why:'Opens hip flexors, glutes and adductors in one position.', desc:"Both legs at 90°. Sit tall. Windshield-wiper to switch sides." },
          { name:'Butterfly Stretch', ids:['cfJcO7gi3zw'], stat:'45 sec', why:'Opens inner thighs and hip flexors — great after squat and lunge work.', desc:'Sit, bring soles together, let knees fall out. Hold ankles, sit tall. Gently press elbows on inner knees.' },
        ]},
      ]
    },

    finisher: {
      title: '⚡ Optional Finisher',
      sub: 'Only add this if you felt great today',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Tabata Mountain Climbers', ids:['Y3iJJsLe6rM'], stat:'4 × 20 sec on / 10 sec off', why:'Research-backed HIIT protocol — spikes VO₂ max and calorie burn.', desc:'20 sec max-effort mountain climbers, 10 sec xrest — 4 rounds. Use the ⏱ timer set to 20 sec.', mod:'Skip if your form dropped during the main workout.' },
          { name:'Tabata Squats', ids:['8hWTZW_fH64'], stat:'4 × 20 sec on / 10 sec off', why:'HIIT with the lower body — keeps metabolic demand high.', desc:'20 sec of fast bodyweight squats, 10 sec rest — 4 rounds. Full depth, controlled landing.', mod:'Reduce rep speed for the last round if needed.' },
        ]},
      ]
    },
  },

  Wednesday: {
    warmup: {
      title: 'Warm-Up',
      sub: '8–10 min · No rest — keep moving',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Marching in Place', ids:['Ac8M_Osjy6s'], stat:'60 sec', why:'Raises heart rate and wakes up hip flexors.', desc:'Drive knees up alternately while pumping arms. Stand tall, brace core, land softly.' },
          { name:'High Knees', ids:['DfjpR6dzLVg'], stat:'60 sec', why:'Cardio activation with stronger hip flexor engagement.', desc:'Run on the spot driving knees toward your chest. Pump arms in sync, stay on the balls of your feet.' },
          { name:'Butt Kicks', ids:['lVZi-AwxLPo'], stat:'60 sec', why:'Activates hamstrings and keeps heart rate up.', desc:'Jog on the spot, kicking heels up toward your glutes. Keep torso upright.' },
        ]},
        { alts: [
          { name:'Arm Circles', ids:['D40wm6vbI_0'], stat:'30 sec each direction', why:'Mobilises shoulder joints and warms the rotator cuff.', desc:'Arms straight out. Start small then widen. Shoulders stay down. Switch direction halfway.' },
          { name:'Shoulder Rolls', ids:['X7NtgY9kCCM'], stat:'30 sec forward / 30 sec back', why:'Releases upper trapezius and prepares shoulder girdle.', desc:'Big slow rolls forward, then reverse. Let arms hang loose. Feel the shoulder blades moving.' },
        ]},
        { alts: [
          { name:'Hip Circles', ids:['fhosmniT48I'], stat:'30 sec each direction', why:'Lubricates hip joints and activates glutes.', desc:'Feet shoulder-width, hands on hips. Draw large slow circles. Upper body stays still.' },
          { name:'Hip Hinges', ids:['sinpFajtRPw'], stat:'10 reps', why:'Activates posterior chain and teaches the hinge pattern.', desc:'Feet hip-width, soft knees. Push hips back as torso tips forward. Feel hamstrings load, then drive hips forward to stand.' },
          { name:'Standing Side Bends', ids:['RfuiraEgKcY'], stat:'10 reps each side', why:'Mobilises the lateral spine and obliques.', desc:'Feet shoulder-width, arm overhead. Bend slowly to one side until you feel a lateral stretch, return. Alternate sides.' },
        ]},
        { alts: [
          { name:'Leg Swings', ids:['difYoBtZi2s'], stat:'10 reps each leg', why:'Dynamically stretches hamstrings and adductors.', desc:'Hold a wall. Swing one leg forward and back in a controlled arc.' },
          { name:'Standing Knee Hugs', ids:['ovgnoeaaZRI'], stat:'10 reps each leg', why:'Stretches glutes and primes balance.', desc:'Lift one knee to chest, hug with both hands. Hold 1 sec. Alternate legs while walking in place.' },
          { name:'Ankle Rolls', ids:['dV5opNYJvQE'], stat:'10 reps each foot', why:'Mobilises ankle joints and prevents lower-leg tightness.', desc:'Lift one foot, trace slow circles with toes — 10 one way, 10 the other. Repeat other foot.' },
        ]},
        { alts: [
          { name:'Inchworms', ids:['pv_8CdDPAAk'], stat:'6 reps', why:'Activates the full posterior chain, core and shoulders.', desc:'Hinge forward, walk hands to a plank. Pause, then walk feet back to hands and stand.' },
          { name:'Bear Crawl', ids:['qpaxI2m75RY'], stat:'10 steps forward / 10 back', why:'Full-body coordination, core and shoulder stability.', desc:'On hands and knees, lift knees 2 inches off floor. Move opposite hand and foot together, staying low.' },
          { name:'Downward Dog Pedals', ids:['tZtlAceyqoA'], stat:'60 sec', why:'Stretches calves and hamstrings while warming the shoulders.', desc:'Downward dog position. Alternate pressing one heel toward the floor at a time, hold 2 sec each side.' },
        ]},
        { alts: [
          { name:"World's Greatest Stretch", ids:['-CiWQ2IvY34'], stat:'3 reps per side', why:"Opens hip flexors, thoracic spine and groin in one move.", desc:'Deep lunge, same-side hand beside front foot, rotate top arm toward ceiling. Hold 2 sec.' },
          { name:'Spiderman Lunge', ids:['R1UvsRbMTGQ'], stat:'5 reps per side', why:'Combines hip flexor stretch with thoracic rotation.', desc:'Step into a deep lunge, drop same-side elbow to the floor, then rotate and reach that arm to the ceiling.' },
          { name:'Hip Flexor Rock', ids:['zm6uf3E3ZfI'], stat:'8 reps per side', why:'Dynamically loosens tight hip flexors and improves lunge depth.', desc:'Half-kneeling lunge. Rock hips forward gently until you feel the front hip stretch. Rock back. Repeat rhythmically.' },
        ]},
        { alts: [
          { name:'Jumping Jacks', ids:['CWpmIW6l-YA'], stat:'60 sec', why:'Full-body cardio activation that raises core temperature.', desc:'Jump feet wide as arms go overhead, then return. Stay light on feet.' },
          { name:'Step Jacks', ids:['JHdVMkRBuRA'], stat:'60 sec', why:'Low-impact alternative that still raises heart rate.', desc:'Step one foot out wide as arms go up, bring it back, then alternate feet. Same rhythm as a jumping jack — no jump.' },
          { name:'Skaters', ids:['Jx2KXGbQkYM'], stat:'60 sec', why:'Lateral movement pattern that warms hips and improves coordination.', desc:'Leap sideways onto one foot, swinging the other leg behind. Touch hand to foot. Leap the other way.' },
        ]},
      ]
    },

    main: {
      title: 'Main Workout',
      sub: 'Sets & reps with equipment',
      accent: 'var(--main)',
      blocks: [
        { label:'🔵 BLOCK A — UPPER BODY PUSH & PULL (TORSO)', start:0, end:1 },
        { label:'🔴 BLOCK B — VERTICAL STRENGTH & CORE',      start:2, end:3 },
        { label:'🟢 BLOCK C — ARM & WRIST ACCESSORY',        start:4, end:5 }
      ],

      exercises: [
        /* A1 */ { alts: [
          { name:'Chest Press', ids:['hkU6fSHcslw'], stat:'3 × 10–12 reps', rest:'60–90 sec', why:'Builds thick pectoral muscles and foundational pushing power for the upper body.', desc:'Sit back firmly. Push the handles forward until arms are extended but not locked. Control the weight on the way back.', mod:'Focus on the mind-muscle connection by squeezing the chest at the peak.' },
        ]},
        /* A2 */ { alts: [
          { name:'Lat Pulldown', ids:['51ql2-2kLfA'], stat:'3 × 10–12 reps', rest:'60–90 sec', why:'The primary exercise for back width and improving vertical pulling strength.', desc:'Sit with thighs under the pads. Pull the bar down to your upper chest, driving your elbows toward your back pockets.', mod:'Use a slightly wider than shoulder-width grip for better lat engagement.' },
        ]},
        /* B1 */ { alts: [
          { name:'Shoulder Press', ids:['WvLMauqrnK8'], stat:'3 × 8–10 reps', rest:'60–90 sec', why:'Develops the anterior and medial deltoids for strong, rounded shoulders.', desc:'Press the weights vertically from shoulder height until arms are fully extended overhead. Lower slowly to the start.', mod:'Keep your core braced to prevent your lower back from arching.' },
        ]},
        /* B2 */ { alts: [
          { name:'Cable Rotation', ids:['YykmcX2b-LY'], stat:'3 × 12 reps/side', rest:'45 sec', why:'Builds rotational core strength and stability, targeting the obliques.', desc:'Stand sideways to the cable machine. Pull the handle across your body using your core, keeping your arms relatively straight.', mod:'Rotate your hips slightly with the movement to protect the lower spine.' },
        ]},
        /* C1 */ { alts: [
          { name:'Overhead Triceps Extension', ids:['1u18yJELsh0'], stat:'3 × 12–15 reps', rest:'45–60 sec', why:'Targets the long head of the triceps by placing it in a stretched position.', desc:'Hold the weight or cable overhead. Lower the weight behind your head by bending elbows, then extend back to the top.', mod:'Keep your elbows tucked in toward your ears throughout the movement.' },
        ]},
        /* C2 */ { alts: [
          { name:'Reverse Wrist Curl', ids:['hks_Bqtq6rg'], stat:'3 × 15–20 reps', rest:'45 sec', why:'Strengthens the forearm extensors and improves grip stability.', desc:'Rest forearms on a bench with palms down. Lift the back of your hands toward the ceiling using only your wrists.', mod:'Use a light weight and focus on the burning sensation in the forearms.' },
        ]}
      ]
    },

    cool: {
      title: 'Cool-Down',
      sub: 'Hold 30–45 sec per side · Breathe deeply',
      accent: 'var(--cool)',
      exercises: [
        { alts: [
          { name:'Standing Quad Stretch', ids:['Uwwuc8pRRc0'], stat:'30–45 sec/side', why:'Releases quads and hip flexors taxed during squats and lunges.', desc:'Stand on one leg, pull opposite heel toward glute. Push hip slightly forward. Hold a wall if needed.' },
          { name:'Lying Quad Stretch', ids:['98I9C78aBZg'], stat:'30–45 sec/side', why:'Same target but removes the balance demand.', desc:'Lie on your side, pull top heel toward glutes with the top hand. Keep knees together.' },
        ]},
        { alts: [
          { name:'Figure-4 Hip Stretch', ids:['Xb5gHdYtHnk'], stat:'30–45 sec/side', why:'Releases glutes and piriformis worked during all leg exercises.', desc:'Lie on back. Cross ankle over knee forming a figure-4. Pull thigh toward chest.' },
          { name:'Seated Pigeon', ids:['S0srEVzPp5A'], stat:'30–45 sec/side', why:'Deep glute and hip external rotator stretch.', desc:'Sit on floor, bend one leg in front of you, extend the other behind. Sit tall or fold forward gently.' },
        ]},
        { alts: [
          { name:'Supine Hamstring Stretch', ids:['inLULJztZh0'], stat:'30–45 sec/side', why:'Lengthens hamstrings after lower-body loading.', desc:'Extend one leg toward ceiling, hold behind thigh. Flex foot to deepen the stretch.' },
          { name:'Standing Hamstring Stretch', ids:['POz90rMBJW4'], stat:'30–45 sec/side', why:'Same muscles, easier to ease into if the floor stretch is intense.', desc:'Stand, hinge forward and reach toward toes. Bend one knee slightly if needed. Hold.' },
        ]},
        { alts: [
          { name:"Child's Pose", ids:['_ZX_zTOBgp8'], stat:'45 sec', why:'Decompresses the lower back and stretches lats.', desc:'Kneel, sit back toward heels, arms reaching long. Breathe into your lower back.' },
          { name:'Thread the Needle', ids:['rlac1t_QQJM'], stat:'30 sec/side', why:'Opens thoracic rotation and shoulder — great after push work.', desc:'On all fours, slide one arm under your body along the floor. Lower shoulder toward ground, hold.' },
        ]},
        { alts: [
          { name:'Chest Opener Stretch', ids:['16qCwSMGqx4'], stat:'30–45 sec/side', why:'Opens pec minor and front shoulder after pushing movements.', desc:'Forearm on a wall at 90°. Slowly rotate body away until you feel the chest stretch.' },
          { name:'Doorway Chest Stretch', ids:['8wiZpixdHPU'], stat:'30–45 sec', why:'Both sides simultaneously — efficient chest opener.', desc:'Stand in a doorway or corner. Press both forearms on the frame, step forward until you feel a chest stretch.' },
        ]},
        { alts: [
          { name:'Seated Thoracic Twist', ids:['OQhyJ7Oi55Q'], stat:'30–45 sec/side', why:'Restores thoracic rotation compressed during pushing movements.', desc:'Sit with legs extended. Bend one knee, rotate torso toward it. Sit tall throughout.' },
          { name:'Supine Spinal Twist', ids:['B2YBWYQ8hDE'], stat:'30 sec/side', why:'Passive rotation that releases the thoracic and lumbar spine.', desc:'Lie on back. Pull one knee across your body to the opposite side, arms out. Keep shoulders flat.' },
        ]},
        { alts: [
          { name:'90/90 Hip Stretch', ids:['nWBKgtVjIjE'], stat:'30–45 sec/side', why:'Opens hip flexors, glutes and adductors in one position.', desc:"Both legs at 90°. Sit tall. Windshield-wiper to switch sides." },
          { name:'Butterfly Stretch', ids:['cfJcO7gi3zw'], stat:'45 sec', why:'Opens inner thighs and hip flexors — great after squat and lunge work.', desc:'Sit, bring soles together, let knees fall out. Hold ankles, sit tall. Gently press elbows on inner knees.' },
        ]},
      ]
    },

    finisher: {
      title: '⚡ Optional Finisher',
      sub: 'Only add this if you felt great today',
      accent: 'var(--warm)',
      exercises: [
        { alts: [
          { name:'Tabata Mountain Climbers', ids:['Y3iJJsLe6rM'], stat:'4 × 20 sec on / 10 sec off', why:'Research-backed HIIT protocol — spikes VO₂ max and calorie burn.', desc:'20 sec max-effort mountain climbers, 10 sec xrest — 4 rounds. Use the ⏱ timer set to 20 sec.', mod:'Skip if your form dropped during the main workout.' },
          { name:'Tabata Squats', ids:['8hWTZW_fH64'], stat:'4 × 20 sec on / 10 sec off', why:'HIIT with the lower body — keeps metabolic demand high.', desc:'20 sec of fast bodyweight squats, 10 sec rest — 4 rounds. Full depth, controlled landing.', mod:'Reduce rep speed for the last round if needed.' },
        ]},
      ]
    },
  },

  Thursday: {
    warmup: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },

    main: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--main)',
      blocks: [],
      exercises: [],
    },

    cool: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--cool)',
      exercises: [],
    },
    
    finisher: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },
  },

  Friday: {
    warmup: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },

    main: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--main)',
      blocks: [],
      exercises: [],
    },

    cool: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--cool)',
      exercises: [],
    },
    
    finisher: {
      title: 'Resting Today',
      sub: 'A good rest goes a long way',
      accent: 'var(--warm)',
      exercises: [],
    },
  }
};

/* ══════════════════════════════════════════════════════════════════
   PROFILES
   Each profile has its own hero display, phase data, and week schedule.
   Progress and alt selections are saved per-profile in localStorage.
══════════════════════════════════════════════════════════════════ */
const gym20Stat = '3 × 8–12 reps';
const gym20Warmup = gymPhases.Saturday.warmup;
const gym20Cool = gymPhases.Saturday.cool;
const gym20Finisher = gymPhases.Saturday.finisher;
const gym20Rest = gymPhases.Thursday;

function gym20Day(main) {
  return {
    warmup: gym20Warmup,
    main,
    cool: gym20Cool,
    finisher: gym20Finisher,
  };
}

const gym20Phases = {
  Saturday: gym20Day({
    title: 'Main Workout',
    sub: 'Chest + Back · 3 sets · 8–12 reps',
    accent: 'var(--main)',
    blocks: [
      { label:'BLOCK A — PUSH/PULL STRENGTH', start:0, end:1 },
      { label:'BLOCK B — MACHINE PRESS + VERTICAL PULL', start:2, end:3 },
      { label:'BLOCK C — CHEST/BACK ACCESSORY', start:4, end:5 },
    ],
    exercises: [
      { alts: [
        { name:'Incline Dumbbell Bench Press', ids:['5orOHJL2qS4'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/saturday-01-incline-dumbbell-press.png', imageAlt:'Incline dumbbell bench press exercise image', why:'Upper-chest compound press that also trains the front delts and triceps.', desc:'Lie back on an incline bench with dumbbells over your upper chest. Lower with elbows slightly tucked, then press up and in without clanking the weights.', mod:'Use a lower incline or lighter dumbbells if your shoulders take over.' },
      ]},
      { alts: [
        { name:'Seated Cable Row', ids:['UCXxvVItLoM'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/saturday-02-seated-cable-row.png', imageAlt:'Seated cable row exercise image', why:'Horizontal pull for mid-back thickness, lats, and shoulder-blade control.', desc:'Sit tall with a neutral spine. Pull the handle toward your lower ribs, squeeze shoulder blades back, then return under control.', mod:'Reduce the load until you can row without leaning back.' },
      ]},
      { alts: [
        { name:'Incline Machine Chest Press', ids:['hkU6fSHcslw'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/saturday-03-incline-machine-chest-press.png', imageAlt:'Incline machine chest press exercise image', why:'Stable upper-chest press that lets you load the pecs hard after dumbbells.', desc:'Set the seat so the handles start near upper-chest height. Press forward and slightly upward, then control the return until you feel the chest stretch.', mod:'Stop just before the deepest stretch if your shoulders feel pinched.' },
      ]},
      { alts: [
        { name:'Lat Pulldown', ids:['CAwf7n6Luuc'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/saturday-04-lat-pulldown.png', imageAlt:'Lat pulldown exercise image', why:'Vertical pull that builds back width while giving the biceps useful secondary work.', desc:'Lock thighs under the pad. Pull the bar to upper chest by driving elbows down, then let the shoulders rise under control at the top.', mod:'Use a neutral or slightly closer grip if wide grip bothers your shoulders.' },
      ]},
      { alts: [
        { name:'Seated Cable Chest Fly', ids:['MD1IfN687a8'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/saturday-05-seated-cable-chest-fly.png', imageAlt:'Seated cable chest fly exercise image', why:'Chest isolation that keeps tension through the shortened and stretched positions.', desc:'Sit tall between the cables. Open arms with a soft elbow bend, then sweep hands together in front of the chest and squeeze briefly.', mod:'Use lighter weight and stop the stretch before your shoulders roll forward.' },
      ]},
      { alts: [
        { name:'Barbell Bent-Over Row', ids:['bm0_q9bR_HA'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/saturday-06-barbell-bent-over-row.png', imageAlt:'Barbell bent-over row exercise image', why:'Free-weight row for lats, rhomboids, rear delts, and posterior-chain bracing.', desc:'Hinge until your torso is angled forward, brace hard, and row the bar toward your lower ribs. Lower until arms are long without losing back position.', mod:'Use dumbbells or a lighter bar if your lower back fatigues first.' },
      ]},
    ],
  }),

  Sunday: gym20Day({
    title: 'Main Workout',
    sub: 'Shoulders + Arms · 3 sets · 8–12 reps',
    accent: 'var(--main)',
    blocks: [
      { label:'BLOCK A — DELTS + SHOULDER HEALTH', start:0, end:2 },
      { label:'BLOCK B — ARM ISOLATION', start:3, end:5 },
    ],
    exercises: [
      { alts: [
        { name:'Seated Dumbbell Shoulder Press', ids:['E9ShwbwZ1zw'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/sunday-01-seated-dumbbell-shoulder-press.png', imageAlt:'Seated dumbbell shoulder press exercise image', why:'Main overhead press for front and side delts with strong triceps assistance.', desc:'Sit upright with dumbbells at shoulder height. Press overhead until arms are nearly straight, then lower to a controlled shoulder-level position.', mod:'Use a bench with back support and keep ribs down.' },
      ]},
      { alts: [
        { name:'Dumbbell Lateral Raise', ids:['xyK8UiC-BUw'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/sunday-02-dumbbell-lateral-raise.png', imageAlt:'Dumbbell lateral raise exercise image', why:'Side-delt isolation for shoulder width without heavy joint loading.', desc:'Stand or sit tall. Raise dumbbells out to the sides with elbows slightly bent, stop around shoulder height, then lower slowly.', mod:'Use lighter dumbbells and lead with elbows instead of hands.' },
      ]},
      { alts: [
        { name:'Cable Face Pull', ids:['vQCi5Xzhoyw'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/sunday-03-cable-face-pull.png', imageAlt:'Cable face pull exercise image', why:'Rear-delt and upper-back work that balances pressing and supports shoulder posture.', desc:'Set the rope around face height. Pull toward your forehead while rotating thumbs back, then return until arms are long.', mod:'Step back less or reduce weight if you shrug during the pull.' },
      ]},
      { alts: [
        { name:'Seated Dumbbell Overhead Triceps Extension', ids:['M8ut-xSj_lo'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/sunday-04-seated-dumbbell-overhead-triceps-extension.png', imageAlt:'Seated dumbbell overhead triceps extension exercise image', why:'Loads the long head of the triceps in a deep stretched position.', desc:'Hold one dumbbell overhead. Keep elbows close, lower behind your head, then extend until arms are straight without flaring.', mod:'Use one lighter dumbbell or do the move one arm at a time.' },
      ]},
      { alts: [
        { name:'Cable Triceps Pushdown', ids:['6Fzep104f0s'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/sunday-05-cable-triceps-pushdown.png', imageAlt:'Cable triceps pushdown exercise image', why:'Direct triceps isolation that pairs well after the stretched overhead movement.', desc:'Pin elbows to your sides and push the bar or rope down until arms are straight. Pause, then return to about 90 degrees.', mod:'Use a rope if a straight bar bothers your wrists.' },
      ]},
      { alts: [
        { name:'Seated Dumbbell Curl', ids:['FwApweWh6SY'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/sunday-06-seated-dumbbell-curl.png', imageAlt:'Seated dumbbell curl exercise image', why:'Stable biceps curl that reduces body swing and keeps tension on the arms.', desc:'Sit tall with arms hanging by your sides. Curl both dumbbells up while keeping elbows still, then lower fully with control.', mod:'Alternate arms if both arms at once makes you lean back.' },
      ]},
    ],
  }),

  Monday: gym20Day({
    title: 'Main Workout',
    sub: 'Legs · 3 sets · 8–12 reps',
    accent: 'var(--main)',
    blocks: [
      { label:'BLOCK A — QUAD COMPOUNDS', start:0, end:1 },
      { label:'BLOCK B — KNEE FLEXION/EXTENSION', start:2, end:3 },
      { label:'BLOCK C — POSTERIOR CHAIN + CALVES', start:4, end:5 },
    ],
    exercises: [
      { alts: [
        { name:'Barbell Back Squat', ids:['dW3zj79xfrc'], stat:gym20Stat, rest:'90 sec', image:'assets/gym20/monday-01-barbell-back-squat.png', imageAlt:'Barbell back squat exercise image', why:'Big lower-body compound for quads, glutes, trunk bracing, and overall strength.', desc:'Set the bar across your upper back. Brace, sit between your hips, keep knees tracking toes, then drive up through mid-foot.', mod:'Use a box squat or goblet squat if barbell depth is inconsistent.' },
      ]},
      { alts: [
        { name:'Leg Press', ids:['EotSw18oR9w'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/monday-02-leg-press.png', imageAlt:'Leg press exercise image', why:'Heavy quad and glute volume with less balance demand than free-weight squats.', desc:'Place feet around shoulder width. Lower the sled until hips stay down and knees bend deeply, then press without locking knees hard.', mod:'Move feet slightly higher if knees feel crowded.' },
      ]},
      { alts: [
        { name:'Leg Extension', ids:['m0FOpMEgero'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/monday-03-leg-extension.png', imageAlt:'Leg extension exercise image', why:'Quad isolation that helps finish knee-extension work after compounds.', desc:'Sit back against the pad. Extend until knees are straight, squeeze quads, then lower slowly to the start.', mod:'Use a lighter load and a slower lowering phase.' },
      ]},
      { alts: [
        { name:'Seated Leg Curl', ids:['NxPR7G_YNHI'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/monday-04-seated-leg-curl.png', imageAlt:'Seated leg curl exercise image', why:'Hamstring isolation that balances quad work and supports knee health.', desc:'Set the pad above your ankles. Curl down by bending knees, squeeze hamstrings, then let the weight return under control.', mod:'Reduce range slightly if the stretch feels sharp behind the knee.' },
      ]},
      { alts: [
        { name:'Dumbbell Romanian Deadlift', ids:['hu3jRvTc_po'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/monday-05-dumbbell-romanian-deadlift.png', imageAlt:'Dumbbell Romanian deadlift exercise image', why:'Hip-hinge pattern for hamstrings, glutes, and strong posterior-chain control.', desc:'Hold dumbbells in front of thighs. Push hips back with soft knees, feel hamstrings stretch, then stand by driving hips forward.', mod:'Stop just below the knees until your hinge feels clean.' },
      ]},
      { alts: [
        { name:'Standing Dumbbell Calf Raise', ids:['lyDp3tbx3qU'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/monday-06-standing-dumbbell-calf-raise.png', imageAlt:'Standing dumbbell calf raise exercise image', why:'Direct calf work for the gastrocnemius after heavier leg training.', desc:'Hold dumbbells at your sides. Rise onto the balls of your feet, pause at the top, then lower until calves stretch.', mod:'Use a wall or rack for balance and do one leg at a time if needed.' },
      ]},
    ],
  }),

  Tuesday: gym20Rest,

  Wednesday: gym20Day({
    title: 'Main Workout',
    sub: 'Upper Body · 3 sets · 8–12 reps',
    accent: 'var(--main)',
    blocks: [
      { label:'BLOCK A — PUSH/PULL COMPOUNDS', start:0, end:1 },
      { label:'BLOCK B — SHOULDERS + POSTURE', start:2, end:3 },
      { label:'BLOCK C — CHEST + BICEPS ACCESSORY', start:4, end:5 },
    ],
    exercises: [
      { alts: [
        { name:'Incline Dumbbell Bench Press', ids:['5orOHJL2qS4'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/wednesday-01-incline-dumbbell-press.png', imageAlt:'Incline dumbbell bench press exercise image', why:'Upper-chest compound press that repeats the key chest pattern with free weights.', desc:'Set the bench to a moderate incline. Lower dumbbells toward the upper chest, keep elbows controlled, then press smoothly upward.', mod:'Choose a lighter pair and keep the incline below 45 degrees.' },
      ]},
      { alts: [
        { name:'Lat Pulldown', ids:['CAwf7n6Luuc'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/wednesday-02-lat-pulldown.png', imageAlt:'Lat pulldown exercise image', why:'Back-width builder that balances pressing volume in the same block.', desc:'Pull the bar to the upper chest while driving elbows down and slightly back. Control the stretch at the top each rep.', mod:'Keep the torso mostly still and lighten the stack if you swing.' },
      ]},
      { alts: [
        { name:'Seated Dumbbell Shoulder Press', ids:['E9ShwbwZ1zw'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/wednesday-03-seated-dumbbell-shoulder-press.png', imageAlt:'Seated dumbbell shoulder press exercise image', why:'Overhead strength work for delts and triceps after the chest/back pairing.', desc:'Sit tall and press dumbbells from shoulder height to overhead. Lower until elbows are just below shoulder height.', mod:'Use back support and avoid arching hard through the lower back.' },
      ]},
      { alts: [
        { name:'Cable Face Pull', ids:['vQCi5Xzhoyw'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/wednesday-04-cable-face-pull.png', imageAlt:'Cable face pull exercise image', why:'Rear-delt and upper-back work that keeps shoulder training balanced.', desc:'Pull the rope toward eye level, separate the ends, and squeeze the back of your shoulders before returning.', mod:'Lower the weight until the movement stays smooth and controlled.' },
      ]},
      { alts: [
        { name:'Dumbbell Chest Fly', ids:['vJh-4hRLH-o'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/wednesday-05-dumbbell-chest-fly.png', imageAlt:'Dumbbell chest fly exercise image', why:'Chest isolation that adds stretch-focused pec volume without more heavy pressing.', desc:'Lie on a bench with dumbbells above chest. Open arms wide with soft elbows, then bring them back together like hugging a barrel.', mod:'Use a smaller range if your shoulders feel stretched too aggressively.' },
      ]},
      { alts: [
        { name:'Dumbbell Hammer Curl', ids:['VqoFbCmRyyk'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/wednesday-06-dumbbell-hammer-curl.png', imageAlt:'Dumbbell hammer curl exercise image', why:'Targets brachialis, brachioradialis, and biceps for thicker-looking arms.', desc:'Hold dumbbells with palms facing in. Curl without swinging, keep elbows close, then lower to full arm length.', mod:'Alternate arms to keep the torso still.' },
      ]},
    ],
  }),

  Thursday: gym20Day({
    title: 'Main Workout',
    sub: 'Lower Body · 3 sets · 8–12 reps',
    accent: 'var(--main)',
    blocks: [
      { label:'BLOCK A — SQUAT + UNILATERAL', start:0, end:1 },
      { label:'BLOCK B — QUAD MACHINE WORK', start:2, end:3 },
      { label:'BLOCK C — HINGE + CALVES', start:4, end:5 },
    ],
    exercises: [
      { alts: [
        { name:'Dumbbell Goblet Squat', ids:['7-80HiXX1K8'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/thursday-01-dumbbell-goblet-squat.png', imageAlt:'Dumbbell goblet squat exercise image', why:'Squat pattern that reinforces depth, bracing, and quad/glute control.', desc:'Hold one dumbbell at your chest. Squat down between your knees, keep chest tall, then drive back up through mid-foot.', mod:'Use a box target to control depth.' },
      ]},
      { alts: [
        { name:'Dumbbell Walking Lunge', ids:['2ea3_b9rFdM'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/thursday-02-dumbbell-walking-lunge.png', imageAlt:'Dumbbell walking lunge exercise image', why:'Unilateral leg work for quads, glutes, balance, and left-right symmetry.', desc:'Step forward into a lunge with dumbbells at your sides. Push through the front foot and step into the next rep under control.', mod:'Do reverse lunges in place if walking lunges feel unstable.' },
      ]},
      { alts: [
        { name:'Leg Press', ids:['EotSw18oR9w'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/thursday-03-leg-press.png', imageAlt:'Leg press exercise image', why:'Machine-based quad and glute volume after the free-weight squat and lunge block.', desc:'Keep hips down and knees tracking toes. Lower with control, press up powerfully, and avoid hard knee lockout.', mod:'Shorten depth slightly if your lower back rounds.' },
      ]},
      { alts: [
        { name:'Leg Extension', ids:['m0FOpMEgero'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/thursday-04-leg-extension.png', imageAlt:'Leg extension exercise image', why:'Finishes the quads with direct knee-extension work.', desc:'Extend legs until quads fully contract, pause briefly, then lower in a slow controlled motion.', mod:'Use lighter weight and focus on a smooth squeeze.' },
      ]},
      { alts: [
        { name:'Barbell Romanian Deadlift', ids:['g5u75sgpn04'], stat:gym20Stat, rest:'60–90 sec', image:'assets/gym20/thursday-05-barbell-romanian-deadlift.png', imageAlt:'Barbell Romanian deadlift exercise image', why:'Hamstring and glute hinge that complements the quad-heavy first half of the session.', desc:'Hold the bar against your thighs. Hinge hips back, keep the bar close, stop when hamstrings stretch, then stand tall.', mod:'Use dumbbells or reduce range until your back stays neutral.' },
      ]},
      { alts: [
        { name:'Standing Dumbbell Calf Raise', ids:['lyDp3tbx3qU'], stat:gym20Stat, rest:'45–60 sec', image:'assets/gym20/thursday-06-standing-dumbbell-calf-raise.png', imageAlt:'Standing dumbbell calf raise exercise image', why:'Second weekly calf exposure for lower-leg strength and size.', desc:'Stand tall with dumbbells. Rise as high as possible onto your toes, pause, then lower slowly through the full range.', mod:'Hold a rack with one hand if balance limits the reps.' },
      ]},
    ],
  }),

  Friday: gym20Rest,
};

const PROFILES = [
  {
    id: 'home',
    name: 'Home Body-Workout',
    shortName: 'Home',
    icon: '🏠',
    hero: {
      badge: '⚡ 45-Minute Plan',
      titleHTML: 'HOME<br><span class="g">WORK</span><br>OUT',
      pills: ['🏠 Bodyweight', '📅 3–4× / Week', '⚡ Beginner–Inter.'],
    },
    phases: {
      Sunday: homeBodyPhases.Rest,
      Monday: homeBodyPhases.Default,
      Tuesday: homeBodyPhases.Rest,
      Wednesday: homeBodyPhases.Default,
      Thursday: homeBodyPhases.Rest,
      Friday: homeBodyPhases.Default,
      Saturday: homeBodyPhases.Default
    },
    weekSchedule: [
      { day:'MON', type:'workout',  emoji:'💪', label:'Workout'    },
      { day:'TUE', type:'rest',     emoji:'🚶', label:'Walk / Rest'},
      { day:'WED', type:'workout',  emoji:'💪', label:'Workout'    },
      { day:'THU', type:'rest',     emoji:'🧘', label:'Stretch'    },
      { day:'FRI', type:'workout',  emoji:'💪', label:'Workout'    },
      { day:'SAT', type:'optional', emoji:'⚡', label:'Optional'   },
      { day:'SUN', type:'rest',     emoji:'😴', label:'Full Rest'  },
    ],
  },
  {
    id: 'gym',
    name: 'Gym Workout',
    shortName: 'Gym',
    icon: '🏋️',
    hero: {
      badge: '🏋️ Equipment Plan',
      titleHTML: 'GYM<br><span class="g">WORK</span><br>OUT',
      pills: ['🏋️ Free Weights', '📅 4–5× / Week', '⚡ Inter–Advanced'],
    },
    phases: {
      Sunday: gymPhases["Sunday"],
      Monday: gymPhases["Monday"],
      Tuesday: gymPhases["Tuesday"],
      Wednesday: gymPhases["Wednesday"],
      Thursday: gymPhases["Thursday"],
      Friday: gymPhases["Friday"],
      Saturday: gymPhases["Saturday"]
    },
    weekSchedule: [
      { day:'MON', type:'rest',     emoji:'😴', label:'Rest Day' },
      { day:'TUE', type:'workout',  emoji:'🏋️', label:'Torso + Arms' },
      { day:'WED', type:'workout',  emoji:'🏋️', label:'Push + Core' },
      { day:'THU', type:'rest',     emoji:'😴', label:'Rest Day' },
      { day:'FRI', type:'rest',     emoji:'😴', label:'Rest Day' },
      { day:'SAT', type:'workout',  emoji:'🦵', label:'Lower + Pull' },
      { day:'SUN', type:'workout',  emoji:'💪', label:'Upper (Push/Pull)' },
    ]
  },
  {
    id: 'gym20',
    name: 'Gym 2.0',
    shortName: 'Gym 2.0',
    icon: '🏋️',
    hero: {
      badge: '🏋️ Gym 2.0 Plan',
      titleHTML: 'GYM<br><span class="g">2.0</span>',
      pills: ['🏋️ Equipment Plan', '📅 5× / Week', '⚡ 3 Sets · 8–12'],
    },
    phases: {
      Sunday: gym20Phases["Sunday"],
      Monday: gym20Phases["Monday"],
      Tuesday: gym20Phases["Tuesday"],
      Wednesday: gym20Phases["Wednesday"],
      Thursday: gym20Phases["Thursday"],
      Friday: gym20Phases["Friday"],
      Saturday: gym20Phases["Saturday"],
    },
    weekSchedule: [
      { day:'MON', type:'workout',  emoji:'🦵', label:'Legs' },
      { day:'TUE', type:'rest',     emoji:'😴', label:'Rest Day' },
      { day:'WED', type:'workout',  emoji:'💪', label:'Upper' },
      { day:'THU', type:'workout',  emoji:'🦵', label:'Lower' },
      { day:'FRI', type:'rest',     emoji:'😴', label:'Rest Day' },
      { day:'SAT', type:'workout',  emoji:'🏋️', label:'Chest + Back' },
      { day:'SUN', type:'workout',  emoji:'💪', label:'Shoulders + Arms' },
    ]
  },
];
