// LotM Compendium Populator Macro
// Run this inside Foundry VTT to create all pathway abilities
// Compatible with Foundry VTT V14 and the lotm system

const PATHWAY_DATA = [
  // ============================================================
  // PATH 1: The Fool (Il Matto)
  // ============================================================
  {
    pathway: "The Fool",
    sequence: 9,
    seqName: "Seer",
    abilities: [
      {
        name: "Spirit Vision",
        type: "active",
        desc: "The Seer can perceive spirits, ghosts, and other extraordinary entities invisible to normal sight. By focusing their mind, they open a third eye that reveals the hidden supernatural world overlaid on reality. This ability is taxing to maintain for long periods and may attract the attention of malevolent spirits."
      },
      {
        name: "Clue Searching",
        type: "active",
        desc: "The Seer has an uncanny ability to locate supernatural traces, residual energy, and evidence of extraordinary activities. They can read the echoes left behind by rituals, the presence of mystical creatures, or the use of beyonder abilities. This makes them invaluable investigators of occult crimes and anomalies."
      },
      {
        name: "Danger Intuition",
        type: "passive",
        desc: "A constant low-level awareness of impending threats alerts the Seer before danger manifests. This instinct operates even during sleep, triggering a warning sensation when harmful intent is directed toward them. The stronger the threat, the more powerful the premonition."
      },
      {
        name: "Misfortune Transfer",
        type: "ritual",
        desc: "Through a focused ritual, the Seer can redirect misfortune that has attached itself to a target, displacing it onto another willing or unwilling recipient. The process requires a symbolic connection between the source of misfortune and the new target. Overuse risks attracting the attention of entities associated with fate."
      },
      {
        name: "Luck Theft",
        type: "active",
        desc: "The Seer can temporarily siphon a target's good fortune, leaving them prone to failure while the Seer enjoys an elevated probability of success. The stolen luck dissipates naturally over time and cannot be stored indefinitely. Targets may sense a subtle draining sensation if they are themselves beyonders."
      }
    ]
  },
  {
    pathway: "The Fool",
    sequence: 8,
    seqName: "Clown",
    abilities: [
      {
        name: "Clown's Visage",
        type: "active",
        desc: "The Clown can reshape the features of their face at will, adopting any appearance they have studied or imagined. This shapeshifting extends to skin tone, hair, and minor bone structure changes, though dramatic alterations require concentration. The transformation is limited to the face and head."
      },
      {
        name: "Humor Aura",
        type: "active",
        desc: "The Clown radiates an infectious sense of amusement that compels those nearby to feel lighter, laugh, and lower their emotional defenses. This aura can be turned on or off at will and works even on targets who are aware of its supernatural nature. Under its influence, targets find it difficult to maintain hostility or suspicion."
      },
      {
        name: "Pocket Watch Hypnosis",
        type: "active",
        desc: "Using a specially attuned pocket watch as a focus, the Clown can induce a hypnotic state in a willing or distracted target. In this state, the target becomes highly susceptible to suggestion and may follow simple commands or forget recent events. The effect fades naturally or can be broken by a strong shock."
      },
      {
        name: "Balloon Manipulation",
        type: "active",
        desc: "The Clown can create, animate, and control balloon constructs of surprising toughness and utility. These constructs can serve as distractions, barriers, or even simple tools, shaped by the Clown's intent. In combat they are fragile but fast, and their sudden appearance is often disorienting to enemies."
      }
    ]
  },
  {
    pathway: "The Fool",
    sequence: 7,
    seqName: "Magician",
    abilities: [
      {
        name: "Stage Magic Enhancement",
        type: "passive",
        desc: "All performance and stage magic executed by the Magician carries a subtle supernatural perfection, making tricks appear flawless and impossible even to trained eyes. The enhancement does not create real effects but amplifies the illusion beyond what any mortal skill could achieve. Audiences feel a genuine sense of wonder rather than mere entertainment."
      },
      {
        name: "Misdirection",
        type: "active",
        desc: "The Magician can redirect the attention of one or many targets with extraordinary precision, exploiting gaps in perception to move unseen or conceal actions. This goes beyond mundane sleight of hand, reaching into the subconscious to create blind spots. Even beyonders with enhanced senses can be fooled if the Magician executes it correctly."
      },
      {
        name: "Grand Illusion",
        type: "active",
        desc: "The Magician can project large-scale illusions that engage all five senses, making entire scenes or environments appear real to anyone within range. The illusions require sustained concentration to maintain and begin to fray when the Magician is distracted or harmed. Sufficiently strong-willed individuals may notice inconsistencies if they look carefully."
      },
      {
        name: "Teleportation",
        type: "active",
        desc: "The Magician can instantly displace themselves across short distances, reappearing in a location they can clearly visualize. Each jump is mentally exhausting, limiting rapid repeated use. The ability cannot pass through certain mystical wards or barriers designed to restrict movement."
      }
    ]
  },
  {
    pathway: "The Fool",
    sequence: 6,
    seqName: "Faceless",
    abilities: [
      {
        name: "Perfect Disguise",
        type: "active",
        desc: "The Faceless can perfectly replicate the appearance of any individual they have observed, including voice, scent, and subtle mannerisms that fool even close acquaintances. The transformation is complete enough to withstand physical examination and magical detection below a certain power threshold. Maintaining a specific identity for extended periods requires periodic concentration."
      },
      {
        name: "Persona Steal",
        type: "active",
        desc: "By making physical contact with a target, the Faceless can absorb a copy of their personality, memories, and behavioral patterns in addition to their appearance. This allows them to convincingly impersonate targets in situations that require intimate knowledge. The stolen persona fades over time, though impressions of strong memories linger longer."
      },
      {
        name: "Faceless State",
        type: "active",
        desc: "The Faceless can dissolve their personal identity entirely, becoming a formless presence that leaves no supernatural impression or trace. In this state they have no face, no distinguishing features, and no beyonder signature that can be tracked. They become extraordinarily difficult to remember or perceive, even by those looking directly at them."
      }
    ]
  },
  {
    pathway: "The Fool",
    sequence: 5,
    seqName: "Nimblewright Master",
    abilities: [
      {
        name: "Nimblewright Creation",
        type: "ritual",
        desc: "The Nimblewright Master can construct intricate mechanical servants imbued with a fragment of their own will, giving them the ability to follow complex instructions autonomously. These constructs are made from ordinary materials elevated through ritual and beyonder power. Higher-quality materials and more refined ritual produce more capable nimblewrights."
      },
      {
        name: "Puppet Control",
        type: "active",
        desc: "The Master can exert direct mental control over any construct or puppet they have personally crafted, operating them with precision at a distance. Multiple constructs can be controlled simultaneously, though focus must be divided between them. The connection is two-directional, allowing the Master to perceive through the construct's senses."
      },
      {
        name: "Thread Manipulation",
        type: "active",
        desc: "Invisible threads of will extend from the Nimblewright Master, allowing them to manipulate objects, people, and constructs as if they were puppets on strings. These threads are supernaturally strong and can lift weights far beyond normal limits. Targets with sufficient will may resist the threads, but doing so requires great effort."
      }
    ]
  },
  {
    pathway: "The Fool",
    sequence: 4,
    seqName: "Mysticologist",
    abilities: [
      {
        name: "Seal Creation",
        type: "ritual",
        desc: "The Mysticologist can craft powerful supernatural seals that bind, ward, or contain extraordinary forces and entities. Each seal is a unique formula derived from deep understanding of mystical principles, requiring rare materials and precise execution. Seals created at this sequence can restrain most beyonders below the Sequence 4 threshold."
      },
      {
        name: "Mystery Peeping",
        type: "active",
        desc: "By focusing their gaze on the fundamental nature of things, the Mysticologist can perceive hidden truths, concealed identities, and the deeper mechanisms behind supernatural phenomena. This sight pierces through most forms of disguise or concealment. Extremely powerful mysteries may resist or even reflect this gaze back at the viewer."
      },
      {
        name: "Mythical Creature Summoning",
        type: "ritual",
        desc: "Through elaborate ritual, the Mysticologist can summon creatures of myth and legend, binding them temporarily to their service. The summoned creatures are genuine manifestations of mythical beings rather than mere illusions. The power and nature of what can be summoned depends on the Mysticologist's knowledge and the ritual's quality."
      }
    ]
  },
  {
    pathway: "The Fool",
    sequence: 3,
    seqName: "Miracle Invoker",
    abilities: [
      {
        name: "Miracle Working",
        type: "active",
        desc: "The Miracle Invoker can call forth genuine miracles — events that defy natural law and produce outcomes that should be impossible. The miracles are not simple illusions but real alterations to reality, bending cause and effect to the Invoker's will. The scale and nature of miracles possible increases with the depth of the Invoker's spiritual authority."
      },
      {
        name: "Divine Grace",
        type: "passive",
        desc: "A mantle of divine protection surrounds the Miracle Invoker at all times, deflecting misfortune and softening blows that should be lethal. This grace also extends partially to allies in the Invoker's presence, shielding them from the worst of supernatural harm. The protection is most effective against forces of chaos and malevolence."
      },
      {
        name: "Fate Alteration",
        type: "active",
        desc: "The Miracle Invoker can reach into the threads of destiny and rewrite the fated outcome of an event for themselves or another. This ability operates on a cosmic scale, potentially averting deaths, reversing catastrophes, or changing the trajectory of a life. Using it draws the attention of powerful fate-related entities and carries profound consequences."
      }
    ]
  },

  // ============================================================
  // PATH 2: The Hanged Man (L'Impiccato)
  // ============================================================
  {
    pathway: "The Hanged Man",
    sequence: 9,
    seqName: "Lawyer",
    abilities: [
      {
        name: "Truth Detection",
        type: "passive",
        desc: "The Lawyer possesses an innate ability to detect falsehoods in spoken words, perceiving subtle supernatural tells that accompany lies. This detection operates passively and does not require active concentration, making it difficult to deceive the Lawyer even with carefully prepared stories. Deliberate omissions and half-truths may register as a different quality of distortion."
      },
      {
        name: "Logical Analysis",
        type: "passive",
        desc: "The Lawyer's reasoning capacity is enhanced beyond normal human limits, allowing them to process complex information, identify logical fallacies, and reach accurate conclusions at remarkable speed. This enhancement makes them formidable in debates, negotiations, and investigations. Their analysis can sometimes penetrate supernatural obfuscations that would fool ordinary reasoning."
      },
      {
        name: "Contract Enforcement",
        type: "ritual",
        desc: "When the Lawyer witnesses or formalizes an agreement, they can imbue it with supernatural binding force that compels both parties to honor their word. Violations of the bound contract result in increasingly severe misfortune for the breaker. The strength of the binding depends on the specificity of the terms and the power of the Lawyer."
      }
    ]
  },
  {
    pathway: "The Hanged Man",
    sequence: 8,
    seqName: "Lobbyist",
    abilities: [
      {
        name: "Persuasion Aura",
        type: "active",
        desc: "The Lobbyist projects an aura of natural authority and reasonableness that makes their arguments more compelling and their requests harder to refuse. This supernatural charisma operates even when the Lobbyist is making unreasonable or self-serving proposals. Targets influenced by the aura rationalize their compliance as their own decision."
      },
      {
        name: "Silver Tongue",
        type: "active",
        desc: "The Lobbyist's words carry a supernatural weight that slides past rational objection directly into the listener's decision-making process. Targeted phrases spoken with intent can plant agreement, dissolve suspicion, or reframe how a target perceives a situation. The effect is not mind control but a profound nudge toward the Lobbyist's preferred outcome."
      },
      {
        name: "Network Manipulation",
        type: "active",
        desc: "The Lobbyist can perceive and manipulate the invisible web of relationships, obligations, and influence that connects people in social and political spheres. They can identify leverage points, trace chains of influence, and subtly redirect social currents to achieve desired outcomes. This ability allows them to achieve results through others without ever appearing directly involved."
      }
    ]
  },
  {
    pathway: "The Hanged Man",
    sequence: 7,
    seqName: "Barbarian",
    abilities: [
      {
        name: "Berserk Rage",
        type: "active",
        desc: "The Barbarian can enter a state of supernatural fury that multiplies their physical strength and pain tolerance to extraordinary levels. In this state, wounds that would incapacitate a normal person are ignored, and blows carry enough force to bend steel. The rage is difficult to direct precisely and may cause collateral damage if not managed carefully."
      },
      {
        name: "War Cry",
        type: "active",
        desc: "The Barbarian's battle cry resonates with supernatural dread, striking fear into the hearts of enemies who hear it. The cry bypasses rational courage, triggering instinctive panic even in trained soldiers and minor beyonders. Particularly powerful individuals may resist the full effect but will still feel the primal impact."
      },
      {
        name: "Endurance",
        type: "passive",
        desc: "The Barbarian's body has been conditioned to an extraordinary degree, allowing them to continue functioning through injuries that would kill or incapacitate others. Wounds close faster, poison metabolizes more rapidly, and exhaustion sets in far later than normal. This endurance extends to mental and spiritual assaults as well as physical ones."
      }
    ]
  },
  {
    pathway: "The Hanged Man",
    sequence: 6,
    seqName: "Briber",
    abilities: [
      {
        name: "Value Perception",
        type: "passive",
        desc: "The Briber can instantly perceive what any individual values most — whether material, emotional, or spiritual — making them expert at identifying what will motivate or compromise a target. This perception extends to hidden desires that the target may not consciously acknowledge. It operates as an intuitive read rather than explicit information."
      },
      {
        name: "Exchange Ritual",
        type: "ritual",
        desc: "Through a formalized exchange ritual, the Briber can create supernatural trade agreements in which both parties receive something of perceived equivalent value. These exchanges carry a binding force similar to a contract, and backing out of them invites misfortune. The Briber can skew the perceived value of what they offer using their other abilities."
      },
      {
        name: "Corruption Touch",
        type: "active",
        desc: "The Briber can channel a subtle corrupting influence through physical contact or a symbolic gift, gradually eroding a target's principles and making them susceptible to future compromise. The corruption does not force actions but weakens moral resistance over time. Extended contact can fundamentally alter a target's ethical framework."
      }
    ]
  },
  {
    pathway: "The Hanged Man",
    sequence: 5,
    seqName: "Baron of Corruption",
    abilities: [
      {
        name: "Corruption Field",
        type: "active",
        desc: "The Baron of Corruption radiates a sustained field of corroding influence that weakens the integrity of materials, relationships, and principles within range. Structures crack, alliances fray, and convictions waver in this field. The effect intensifies with proximity and duration of exposure."
      },
      {
        name: "Desire Amplification",
        type: "active",
        desc: "The Baron can magnify a target's existing desires to overwhelming intensity, making them prioritize the fulfillment of those desires above reason, duty, or self-preservation. This amplification does not create new desires but inflames what already exists. At full intensity, targets will take actions entirely contrary to their normal character."
      },
      {
        name: "Will Erosion",
        type: "active",
        desc: "The Baron can systematically dismantle a target's willpower through sustained supernatural pressure, gradually stripping away their ability to resist commands, temptations, or corruption. The erosion happens gradually over multiple exposures unless the Baron concentrates it into a focused assault. Once will is sufficiently eroded, the target becomes highly pliable."
      }
    ]
  },
  {
    pathway: "The Hanged Man",
    sequence: 4,
    seqName: "Mentor",
    abilities: [
      {
        name: "Knowledge Transfer",
        type: "active",
        desc: "The Mentor can directly transmit knowledge they possess into a willing recipient's mind, bypassing the normal process of study and practice. The transferred knowledge feels as though the recipient studied it themselves, complete with context and understanding. Complex subjects may require multiple sessions and leave the recipient mentally fatigued."
      },
      {
        name: "Skill Impartation",
        type: "active",
        desc: "Beyond factual knowledge, the Mentor can share the embodied skills and muscle memory they have developed, allowing a student to perform actions at a level approaching the Mentor's own. The imparted skill is temporary unless reinforced by the student's own practice. The Mentor does not lose their own proficiency during the transfer."
      },
      {
        name: "Talent Awakening",
        type: "ritual",
        desc: "Through a profound ritual of guidance, the Mentor can unlock latent potential within a student, revealing and accelerating the development of abilities they were fated to possess. This awakening can sometimes surface beyond capabilities that the student had no prior indication of. The process is irreversible and permanently alters the student's developmental path."
      }
    ]
  },
  {
    pathway: "The Hanged Man",
    sequence: 3,
    seqName: "Shepherd of Fate",
    abilities: [
      {
        name: "Fate Weaving",
        type: "active",
        desc: "The Shepherd of Fate can reach into the threads of destiny and deliberately weave new patterns, connecting or separating fated paths for individuals or groups. These woven changes take effect gradually through natural-seeming events rather than obvious miracles. The Shepherd must have a clear intention and sufficient understanding of the existing fate patterns."
      },
      {
        name: "Path Reading",
        type: "active",
        desc: "The Shepherd can read the full span of a target's fated path — past, present, and the most probable future — perceiving the key nodes that shape their destiny. This reading reveals not just events but the underlying forces and choices that drive the target's life. Extraordinary individuals may have paths too complex or obscured to read fully."
      },
      {
        name: "Destiny Lock",
        type: "active",
        desc: "The Shepherd can lock a specific outcome into a target's fate, making that outcome extraordinarily difficult to avoid regardless of the target's choices or external circumstances. The locked destiny can be a death, a meeting, a discovery, or any sufficiently specific event. Unlocking a destiny someone else has woven is one of the most difficult acts in the realm of fate."
      }
    ]
  },

  // ============================================================
  // PATH 3: Wheel of Fortune (Ruota della Fortuna)
  // ============================================================
  {
    pathway: "Wheel of Fortune",
    sequence: 9,
    seqName: "Monster",
    abilities: [
      {
        name: "Mutation",
        type: "active",
        desc: "The Monster's body is in constant flux, capable of generating random or semi-controlled physical mutations in response to need or environment. Mutations can include hardened skin, additional limbs, enhanced sensory organs, or other aberrant features. The changes are not always predictable, and uncontrolled mutation during stress may produce startling results."
      },
      {
        name: "Adaptation",
        type: "passive",
        desc: "The Monster rapidly adapts to environmental conditions that would harm or kill normal humans, developing physiological responses to extreme temperatures, pressures, toxins, and other hazards. This adaptation occurs within minutes of exposure and may produce permanent changes with repeated encounters. The Monster's body treats adversity as a blueprint for improvement."
      },
      {
        name: "Aberrant Strength",
        type: "passive",
        desc: "The Monster possesses physical strength that far exceeds what their body mass should allow, drawing on an internal reserve of aberrant power. This strength is always present at a low level and can be intensified during moments of heightened emotion or danger. The effort of holding the strength in check is minimal at rest."
      }
    ]
  },
  {
    pathway: "Wheel of Fortune",
    sequence: 8,
    seqName: "Marauder",
    abilities: [
      {
        name: "Plunder",
        type: "active",
        desc: "The Marauder can temporarily strip an extraordinary ability from a target beyonder and wield it themselves for a limited period. The plunder requires direct confrontation and a moment of concentrated will focused on the target. Plundered abilities fade when the duration ends or if the original owner reclaims them through sufficient effort."
      },
      {
        name: "Loot",
        type: "active",
        desc: "The Marauder can reach into an item's supernatural properties and temporarily claim them, using mystical effects that are normally locked to the item's owner. The looted properties manifest as if the item were in the Marauder's possession. Unlike physical theft, Loot leaves the item physically untouched while its power temporarily flows elsewhere."
      },
      {
        name: "Quick Strike",
        type: "active",
        desc: "The Marauder can execute a devastating offensive action with speed that bypasses normal reaction time, hitting before the target can register the motion as a threat. The strike's effectiveness is multiplied when the target is distracted or during the moment of looting. It is frequently used to open encounters and steal the initiative."
      }
    ]
  },
  {
    pathway: "Wheel of Fortune",
    sequence: 7,
    seqName: "Swindler",
    abilities: [
      {
        name: "False Luck",
        type: "active",
        desc: "The Swindler creates a convincing illusion of good fortune around a target, making them believe they are favored by luck when the opposite is true. The target acts with unwarranted confidence, often taking risks they would otherwise avoid, leading to compounding failures. Breaking the illusion requires the target to recognize the pattern, which the Swindler actively obscures."
      },
      {
        name: "Probability Manipulation",
        type: "active",
        desc: "The Swindler can reach into the probability space surrounding an event and tilt outcomes toward or away from specific results. This manipulation is subtle enough to appear natural rather than supernatural to most observers. Multiple simultaneous manipulations are possible but quickly exhaust the Swindler's ability to maintain coherent influence."
      },
      {
        name: "Fortune Flip",
        type: "active",
        desc: "The Swindler can instantaneously reverse the fortune of a situation, turning apparent success into failure or impending disaster into unexpected triumph. This flip operates on the moment rather than on long-term fate, making it most effective as a reactive ability during rapidly changing circumstances. It requires a precise read of the luck currents in a situation."
      }
    ]
  },
  {
    pathway: "Wheel of Fortune",
    sequence: 6,
    seqName: "Propagandist",
    abilities: [
      {
        name: "Mass Suggestion",
        type: "active",
        desc: "The Propagandist can broadcast a suggestion to a crowd or population, causing many individuals simultaneously to accept a belief or take an action they might not have otherwise. The suggestion is most effective when it aligns with existing anxieties or desires in the target group. Individuals with strong critical faculties or beyonder abilities may partially resist."
      },
      {
        name: "Belief Planting",
        type: "active",
        desc: "The Propagandist can insert a specific belief into a target's mind that feels entirely self-generated, as if the target arrived at the conclusion through their own reasoning. Once planted, the belief becomes self-reinforcing as the target unconsciously filters evidence to support it. Removing a planted belief requires either the Propagandist's own action or extremely powerful outside intervention."
      },
      {
        name: "Truth Distortion",
        type: "active",
        desc: "The Propagandist can warp the perception of documented facts and witnessed events in the minds of those they influence, making true things appear false and false things appear credible. This distortion spreads through social networks as affected individuals repeat the altered narrative. Physical evidence can still disprove the distortion to determined investigators."
      }
    ]
  },
  {
    pathway: "Wheel of Fortune",
    sequence: 5,
    seqName: "Winner",
    abilities: [
      {
        name: "Victory Aura",
        type: "active",
        desc: "The Winner radiates an aura of inevitable success that bolsters allies while sapping the confidence and effectiveness of enemies. Those within the aura feel that victory is natural and expected, which subtly improves their performance. Enemies feel the oppressive sense that their efforts are futile, making them hesitate at critical moments."
      },
      {
        name: "Success Probability Boost",
        type: "active",
        desc: "The Winner can concentrate fortune on a specific upcoming action, dramatically raising its probability of succeeding beyond what skill and preparation alone would allow. This boost can be applied to the Winner's own actions or to an ally's within range. The window of heightened probability is brief, requiring the action to be taken quickly."
      },
      {
        name: "Triumph",
        type: "active",
        desc: "At the culmination of a contest or conflict, the Winner can invoke a surge of fated victory that overrides the current momentum and ensures a favorable outcome. Triumph cannot be used arbitrarily — it requires a genuine conflict with genuine stakes and activates at the decisive moment. Its use leaves the Winner temporarily depleted of their luck-related power."
      }
    ]
  },
  {
    pathway: "Wheel of Fortune",
    sequence: 4,
    seqName: "Misfortune Mage",
    abilities: [
      {
        name: "Curse Casting",
        type: "ritual",
        desc: "The Misfortune Mage can cast formalized curses on targets, binding misfortune to them in specific and devastating ways. Each curse is tailored to the target's circumstances and can affect health, relationships, finances, or fate itself. Removing such a curse requires either the Mage's cooperation or a ritual of equal or greater power."
      },
      {
        name: "Misfortune Chain",
        type: "active",
        desc: "The Misfortune Mage can link misfortunes together so that one bad event triggers a cascade of subsequent disasters for the target. This chain reaction amplifies the harm of any single piece of bad luck, turning minor inconveniences into major catastrophes over time. The chain can be broken at specific nodes, but identifying those nodes requires deep understanding of fate mechanics."
      },
      {
        name: "Bad Luck Field",
        type: "active",
        desc: "The Misfortune Mage can project a field of concentrated misfortune around a target or area, causing equipment to malfunction, footing to be unreliable, and plans to unravel at critical moments. Within this field, even skilled and lucky individuals find themselves making errors and suffering setbacks. Maintaining the field requires ongoing concentration."
      }
    ]
  },

  // ============================================================
  // PATH 4: Moon (Luna)
  // ============================================================
  {
    pathway: "Moon",
    sequence: 9,
    seqName: "Apothecary",
    abilities: [
      {
        name: "Potion Brewing",
        type: "ritual",
        desc: "The Apothecary can prepare potions with genuine supernatural effects, from mild healing draughts to potent alchemical compounds. Each recipe requires knowledge of the correct ingredients and preparation method, with errors producing useless or dangerous results. Their brewed potions consistently outperform those made by mundane herbalists or chemists."
      },
      {
        name: "Herb Knowledge",
        type: "passive",
        desc: "The Apothecary possesses comprehensive knowledge of plant and mineral components used in supernatural remedies, including rare specimens unknown to conventional science. They can identify unknown plants on sight with reasonable accuracy and intuit their potential applications. This knowledge covers both beneficial and poisonous properties."
      },
      {
        name: "Antidote Creation",
        type: "ritual",
        desc: "Even when facing unknown poisons or supernatural venoms, the Apothecary can rapidly analyze and formulate an effective antidote. The process is faster than normal if they have access to samples of the poison. For beyonder-derived toxins, the antidote itself may need to be imbued with supernatural energy to be effective."
      }
    ]
  },
  {
    pathway: "Moon",
    sequence: 8,
    seqName: "Beast Tamer",
    abilities: [
      {
        name: "Animal Empathy",
        type: "passive",
        desc: "The Beast Tamer can sense the emotional states of animals and communicate with them through a wordless exchange of feeling and intent. This empathy is bidirectional, allowing the Beast Tamer to understand an animal's needs, fears, and loyalties. Even naturally aggressive animals tend to calm in their presence."
      },
      {
        name: "Beast Command",
        type: "active",
        desc: "The Beast Tamer can issue direct commands to animals that the animals feel compelled to obey, overriding their natural instincts where necessary. The commands can range from simple actions to complex behaviors requiring sustained effort from the animal. The effectiveness scales with the intelligence and size of the animal being commanded."
      },
      {
        name: "Pack Bond",
        type: "active",
        desc: "The Beast Tamer can form a deep supernatural bond with an animal companion, creating a link that allows them to share senses, communicate in detail, and even channel some of each other's vitality. The bonded animal becomes extraordinarily loyal and grows in capability over time. Only one deep Pack Bond can be maintained at a time."
      }
    ]
  },
  {
    pathway: "Moon",
    sequence: 7,
    seqName: "Vampire",
    abilities: [
      {
        name: "Blood Absorption",
        type: "active",
        desc: "The Vampire can drain blood from a target through physical contact, converting the life force within into supernatural power that enhances their own abilities. The absorbed blood temporarily boosts strength, speed, and regeneration beyond baseline levels. Excessive absorption leaves the target weakened or kills them, which carries significant psychological and social consequences."
      },
      {
        name: "Night Vision",
        type: "passive",
        desc: "The Vampire's eyes adapt to darkness far beyond normal human capability, allowing them to see clearly in conditions of near-total darkness. Colors may be muted in extreme darkness, but outlines, movement, and key details remain sharp. Very intense supernatural darkness may still impede this vision."
      },
      {
        name: "Bat Form",
        type: "active",
        desc: "The Vampire can transform their body into a swarm of bats or a single large bat, allowing them to fly, pass through narrow gaps, and move unseen in the night. In this form they retain full consciousness and can control each element of the swarm individually. Returning to humanoid form requires concentration and a few seconds."
      }
    ]
  },
  {
    pathway: "Moon",
    sequence: 6,
    seqName: "Blood Baron",
    abilities: [
      {
        name: "Blood Control",
        type: "active",
        desc: "The Blood Baron can exert direct telekinetic control over blood, whether inside a living body or spilled externally. Internal blood control can be used to create pressure, restriction, or to accelerate healing, depending on the Baron's intent. External blood can be shaped into constructs, projectiles, or barriers with considerable force."
      },
      {
        name: "Hemomancy",
        type: "ritual",
        desc: "Through blood ritual, the Blood Baron can divine information from a sample of someone's blood, gaining insight into their health, location, emotional state, or deepest memories. The blood used in hemomancy is consumed in the process. The accuracy and depth of information obtained improves with the amount of blood and the Baron's experience."
      },
      {
        name: "Blood Puppet",
        type: "active",
        desc: "The Blood Baron can seize control of a living target's body by manipulating the blood within them, overriding the target's own motor functions. The target remains fully conscious and aware but cannot resist the movement of their body. Targets with exceptional will or beyonder protection may throw off the control with tremendous effort."
      }
    ]
  },
  {
    pathway: "Moon",
    sequence: 5,
    seqName: "Shaman King",
    abilities: [
      {
        name: "Spirit Summoning",
        type: "ritual",
        desc: "The Shaman King can call spirits of the land, the dead, or the elements to manifest and serve specific functions. Each spirit summoned requires appropriate ritual and offering, and will depart after fulfilling the task or when dismissed. More powerful spirits require more elaborate rituals and may impose conditions on their cooperation."
      },
      {
        name: "Ancestor Call",
        type: "ritual",
        desc: "The Shaman King can reach into the realm of the ancestral dead and call forth the spirits of specific deceased individuals for consultation or aid. Ancestral spirits retain their knowledge and personality from life and may offer guidance unavailable through other means. Extended calls strain both the Shaman King and the spirit."
      },
      {
        name: "Tribal Ritual",
        type: "ritual",
        desc: "The Shaman King can perform large-scale communal rituals that draw power from a collective of participants, producing effects far beyond what any individual beyonder could generate alone. These rituals can call rain, bless harvests, protect territories, or invoke powerful spiritual protections. Organizing and leading such rituals requires recognized spiritual authority."
      }
    ]
  },
  {
    pathway: "Moon",
    sequence: 4,
    seqName: "Summoner Master",
    abilities: [
      {
        name: "Greater Summoning",
        type: "ritual",
        desc: "The Summoner Master can call forth extraordinarily powerful entities — ancient spirits, demigods, or legendary creatures — that dwarf what lower sequences can summon. These greater entities are formidable allies capable of acting with full autonomy within the terms of the summoning. The ritual cost and risk are proportionally higher."
      },
      {
        name: "Pact Binding",
        type: "ritual",
        desc: "The Summoner Master can forge enduring supernatural pacts with entities, creating ongoing relationships of service and exchange that do not require repeated summoning rituals. Pact-bound entities are more reliable and can be called more quickly in emergencies. Each pact carries obligations on the Master's side as well as the entity's."
      },
      {
        name: "Legion Command",
        type: "active",
        desc: "The Summoner Master can command multiple summoned entities simultaneously with perfect authority, coordinating their actions as a unified force. Summoned entities under Legion Command do not compete with each other for the Master's attention and act with greater efficiency. The number of entities that can be coordinated increases with the Master's power."
      }
    ]
  },
  {
    pathway: "Moon",
    sequence: 3,
    seqName: "Life-Giver",
    abilities: [
      {
        name: "Life Creation",
        type: "ritual",
        desc: "The Life-Giver can create new living organisms from raw materials, imbuing matter with the vital spark of life. The created life may range from simple organisms to complex creatures depending on the Life-Giver's intent and the ritual's scope. Created life is genuinely alive and will grow, reproduce, and behave according to its nature."
      },
      {
        name: "Resurrection",
        type: "ritual",
        desc: "The Life-Giver can restore a soul to a deceased body, reversing death within a window determined by the individual's spiritual integrity. The resurrection requires the body to be sufficiently intact and the soul to be retrievable and willing to return. Successful resurrection restores the individual completely, though the process exhausts the Life-Giver profoundly."
      },
      {
        name: "Soul Anchoring",
        type: "active",
        desc: "The Life-Giver can anchor a soul more firmly to its living body, making it extraordinarily resistant to death, soul extraction, possession, or spiritual displacement. The anchored individual becomes very difficult to kill through supernatural means and their soul cannot easily be stolen or corrupted. The anchoring fades over time unless periodically renewed."
      }
    ]
  },

  // ============================================================
  // PATH 5: Death (Morte)
  // ============================================================
  {
    pathway: "Death",
    sequence: 9,
    seqName: "Corpse Collector",
    abilities: [
      {
        name: "Death Sense",
        type: "passive",
        desc: "The Corpse Collector can sense death in their vicinity — the presence of corpses, the approach of dying individuals, and the residue left by recent violent death. This sense is passive and constant, operating like a spiritual radar attuned to the frequency of mortality. In areas of mass death, the sense can be overwhelming."
      },
      {
        name: "Corpse Preservation",
        type: "ritual",
        desc: "The Corpse Collector can treat a body with a combination of mundane and supernatural methods to halt decomposition indefinitely. The preservation does not animate the corpse but keeps it in pristine condition for later use or study. The ritual is quick by necromantic standards and can be applied in field conditions."
      },
      {
        name: "Undead Detection",
        type: "active",
        desc: "The Corpse Collector can actively scan an area for undead presences, distinguishing between types of undead and assessing their relative power level. This detection pierces most forms of disguise or concealment that undead use to blend with the living. The range extends to cover a substantial area when the Collector focuses."
      }
    ]
  },
  {
    pathway: "Death",
    sequence: 8,
    seqName: "Gravedigger",
    abilities: [
      {
        name: "Earth Manipulation",
        type: "active",
        desc: "The Gravedigger can manipulate earth and soil with supernatural efficiency, causing ground to open, fill, shift, or compact at their command. This ability is rooted in the funerary association with burial and the earth claiming the dead. While primarily useful for creating or collapsing graves, it has obvious combat applications."
      },
      {
        name: "Bone Reading",
        type: "active",
        desc: "By handling the bones of the deceased, the Gravedigger can read the history of that person's life and death, perceiving key events as faded impressions or visions. The older the bones, the more difficult and fragmentary the reading becomes. Violent or traumatic deaths leave particularly strong impressions."
      },
      {
        name: "Tomb Knowledge",
        type: "passive",
        desc: "The Gravedigger possesses an intuitive understanding of burial customs, tomb construction, and the supernatural significance of funeral practices across many cultures. This knowledge allows them to navigate burial sites without triggering traps or disturbing protective wards. They can also identify what a tomb contains and who is buried there from external examination."
      }
    ]
  },
  {
    pathway: "Death",
    sequence: 7,
    seqName: "Undying",
    abilities: [
      {
        name: "Death Resistance",
        type: "passive",
        desc: "The Undying's body and soul are so attuned to death that they become extraordinarily difficult to permanently destroy. Lethal injuries that would kill others instead leave the Undying critically injured, and spiritual attacks are partially absorbed by their death-saturated nature. This resistance does not prevent pain but prevents finality."
      },
      {
        name: "Wound Regeneration",
        type: "passive",
        desc: "The Undying heals from injuries at a rate that defies normal biology, with even severe wounds closing within hours and less severe ones within minutes. The regeneration is not instantaneous but is consistent and reliable, drawing on the same force that makes them resistant to death. Injuries inflicted by specifically anti-regenerative means recover more slowly."
      },
      {
        name: "Undead Communication",
        type: "active",
        desc: "The Undying can speak with and understand undead entities of all types, including those that can no longer communicate intelligibly with the living. This communication is not merely linguistic but reaches into the spiritual state of the undead. Many undead are more forthcoming with someone who shares their death-touched nature."
      }
    ]
  },
  {
    pathway: "Death",
    sequence: 6,
    seqName: "Death Consul",
    abilities: [
      {
        name: "Death Aura",
        type: "active",
        desc: "The Death Consul projects an aura that weakens the vitality of living beings in their vicinity, sapping energy, reducing healing, and creating a pall of lethargy and despair. The aura does not kill directly but makes living creatures more susceptible to other threats. Undead and spirits are unaffected or may even be strengthened by the aura."
      },
      {
        name: "Soul Binding",
        type: "ritual",
        desc: "The Death Consul can bind a soul to a specific location, object, or purpose, preventing it from passing on to whatever afterlife awaits. Bound souls must follow the terms of their binding or face spiritual consequences. The Consul can use this to create guardians, servants, or simply to keep valuable knowledge accessible."
      },
      {
        name: "Necromantic Ritual",
        type: "ritual",
        desc: "The Death Consul has mastered a range of necromantic rituals that manipulate the boundary between life and death. These rituals can animate the dead, communicate with departed souls, draw power from death events, and protect the living from unwanted death-related phenomena. Each ritual is precisely formulated and requires specific components."
      }
    ]
  },
  {
    pathway: "Death",
    sequence: 5,
    seqName: "Gatekeeper",
    abilities: [
      {
        name: "Death Gate",
        type: "active",
        desc: "The Gatekeeper can open passages between the realm of the living and the intermediate states between life and death, physically entering and exiting these liminal spaces. Within these borders, they have a degree of authority over what may pass in either direction. Uninvited incursions into these realms can be challenged and repelled."
      },
      {
        name: "Soul Ferry",
        type: "active",
        desc: "The Gatekeeper can guide a newly departed soul across the boundary of death, ensuring it reaches its intended destination rather than becoming lost or trapped in the intermediate realm. This service can also be used in reverse, retrieving a recently departed soul before it is fully committed to the afterlife. The window for retrieval is narrow."
      },
      {
        name: "Border Crossing",
        type: "active",
        desc: "The Gatekeeper can cross and close the mystical borders between the world of the living and various death-adjacent realms, treating these boundaries as physical territory they patrol. They can seal these borders against specific entities or open them under controlled conditions. Powerful entities attempting forced crossing must contend with the Gatekeeper's authority."
      }
    ]
  },
  {
    pathway: "Death",
    sequence: 4,
    seqName: "Ferryman",
    abilities: [
      {
        name: "Soul Guidance",
        type: "active",
        desc: "The Ferryman possesses an authoritative command over the souls of the dead, able to redirect, collect, or disperse them with a gesture. Lost and wandering souls are drawn toward the Ferryman and instinctively obey their direction. This authority extends to souls that have been bound or trapped by other means."
      },
      {
        name: "Death Walk",
        type: "active",
        desc: "The Ferryman can walk through the deeper reaches of the death realm, territories inaccessible to beings of less spiritual authority. In this domain they move with ease and are largely immune to the hazards that make such realms dangerous to others. Information and entities found in the deeper death realm may be brought back to the living world."
      },
      {
        name: "Reaper's Touch",
        type: "active",
        desc: "The Ferryman can channel the finality of death through physical touch, inflicting wounds that refuse to heal through natural means and carry a spiritual weight that progressive weakens the target's hold on life. Against undead and spiritual entities, this touch is even more devastating. It can also be used gently to ease the passing of the dying."
      }
    ]
  },
  {
    pathway: "Death",
    sequence: 3,
    seqName: "Spirit Guide",
    abilities: [
      {
        name: "Mass Soul Command",
        type: "active",
        desc: "The Spirit Guide can issue commands to multitudes of souls simultaneously, directing departed spirits with the authority of a ruler over their domain. Mass commands are less nuanced than individual direction but can coordinate enormous numbers of spiritual entities toward a common purpose. The command carries the weight of divine death-authority."
      },
      {
        name: "Death Domain",
        type: "active",
        desc: "The Spirit Guide can establish a Domain of Death around themselves, transforming the surrounding area into an extension of the death realm where their authority is absolute. Within this domain, the rules governing life and death bend to their will, and undead serve them without question while living entities find mortality pressing ever closer. "
      },
      {
        name: "Underworld Access",
        type: "active",
        desc: "The Spirit Guide can access the deepest layers of the underworld, places where the most ancient and powerful death-related truths are stored. Information retrieved from these depths can reveal secrets about mortality, fate, and the nature of existence that are inaccessible by any other means. The journey to these depths is not without peril even for the Spirit Guide."
      }
    ]
  },

  // ============================================================
  // PATH 6: Sun (Sole)
  // ============================================================
  {
    pathway: "Sun",
    sequence: 9,
    seqName: "Bard",
    abilities: [
      {
        name: "Music Magic",
        type: "active",
        desc: "The Bard infuses their musical performances with supernatural power, causing their music to produce tangible effects on listeners beyond mere emotional response. Depending on the composition and intent, the music can heal minor wounds, lift curses, or create protective harmonics in the surrounding area. The effects are subtle at this sequence but undeniably real."
      },
      {
        name: "Inspiring Song",
        type: "active",
        desc: "The Bard can perform songs of inspiration that genuinely elevate the capabilities and resolve of those who hear them, not merely through motivation but through a real transfer of supernatural energy. Listeners feel physically lighter, clearer-headed, and more capable. The effect persists for a period after the music stops."
      },
      {
        name: "Lullaby",
        type: "active",
        desc: "The Bard can perform a supernatural lullaby that induces deep, peaceful sleep in willing or unaware targets. The sleep produced is unusually restorative and protects dreamers from nightmares and hostile dream intrusion. In combat, the lullaby can affect inattentive enemies, though determined individuals can resist if they brace themselves."
      }
    ]
  },
  {
    pathway: "Sun",
    sequence: 8,
    seqName: "Light Suppliant",
    abilities: [
      {
        name: "Light Creation",
        type: "active",
        desc: "The Light Suppliant can generate supernatural light from their own body or from a focus point, illuminating areas with radiance that has genuine sanctifying properties beyond simple photons. This light is deeply uncomfortable or harmful to creatures of darkness and corruption. The intensity can be calibrated from a candle's glow to a blinding flare."
      },
      {
        name: "Purification Ray",
        type: "active",
        desc: "The Light Suppliant can project a concentrated beam of purifying light that cleanses corruption, burns undead, and disrupts evil supernatural effects on targets. The ray does not discriminate between external corruption on a target and internal corruption the target has embraced, which makes its use on people morally complex. It is most straightforwardly effective against undead and corrupted objects."
      },
      {
        name: "Holy Light Shield",
        type: "active",
        desc: "The Light Suppliant can weave light into a protective barrier that repels physical attacks and absorbs supernatural harm directed at those within. The shield has a luminous presence that is visible and inspirational to allies and intimidating to enemies with dark-attuned abilities. Maintaining the shield requires steady concentration."
      }
    ]
  },
  {
    pathway: "Sun",
    sequence: 7,
    seqName: "Solar High Priest",
    abilities: [
      {
        name: "Solar Blessing",
        type: "ritual",
        desc: "The Solar High Priest can invoke the blessing of the sun upon individuals or locations, imbuing them with the sun's protective and nourishing power. Blessed individuals heal faster, resist corruption more effectively, and radiate a subtle sanctity that makes evil entities uncomfortable. Blessed locations become sacred ground where dark forces are weakened."
      },
      {
        name: "Light Domain",
        type: "active",
        desc: "The Solar High Priest can establish a domain of light around themselves, extending the qualities of divine radiance throughout an area they claim. Within this domain, darkness is suppressed, corruption finds no purchase, and the Priest's light-based abilities are significantly amplified. Beings of corruption attempting to enter the domain face escalating resistance."
      },
      {
        name: "Radiance Burst",
        type: "active",
        desc: "The Solar High Priest can release a sudden, explosive burst of solar radiance in all directions, bathing the surrounding area in intense divine light. The burst is devastating to undead and corruption-touched entities while leaving the living largely unharmed. It can be channeled into a directional wave instead of an omnidirectional burst for more controlled application."
      }
    ]
  },
  {
    pathway: "Sun",
    sequence: 6,
    seqName: "Notary",
    abilities: [
      {
        name: "Sacred Contract",
        type: "ritual",
        desc: "The Notary can draft and seal contracts with divine authority, creating agreements that are enforced not by legal institutions but by the fundamental laws woven into reality by light and order. Breaking a Sacred Contract draws immediate and proportional supernatural consequences. The Notary can specify precise terms and can build in conditional clauses of considerable complexity."
      },
      {
        name: "Divine Witness",
        type: "active",
        desc: "The Notary can invoke their status as a divine witness to an event, making their testimony irrefutably accurate in the eyes of supernatural law. Actions witnessed by the Notary are recorded in a form that persists beyond ordinary memory and cannot be falsified. This makes them invaluable in disputes involving supernatural binding agreements."
      },
      {
        name: "Oath Binding",
        type: "active",
        desc: "When the Notary receives an oath, they can bind it supernaturally to the swearer, making violation of the oath carry genuine spiritual consequences. Unlike a full Sacred Contract, an Oath Binding can be applied quickly and does not require elaborate preparation. The strength of the binding scales with the sincerity of the oath and the Notary's focused intent."
      }
    ]
  },
  {
    pathway: "Sun",
    sequence: 5,
    seqName: "Priest of Light",
    abilities: [
      {
        name: "Mass Healing",
        type: "active",
        desc: "The Priest of Light can channel healing energy simultaneously to multiple individuals, closing wounds, neutralizing poisons, and restoring vitality across a group. The healing is genuine biological restoration rather than mere symptom suppression. At full power, the Priest can restore a battlefield's wounded to fighting capability in a single extended ritual."
      },
      {
        name: "Holy Ground",
        type: "ritual",
        desc: "The Priest of Light can consecrate an area as permanently holy ground, creating a lasting ward that suppresses dark supernatural activity and provides ongoing protection to those sheltered within. Holy Ground is one of the most reliable defenses against spiritual intrusion and corruption. The consecration is more durable the longer the ritual and the more powerful the Priest."
      },
      {
        name: "Undead Bane",
        type: "active",
        desc: "The Priest of Light becomes anathema to the undead, projecting an aura that physically harms them on contact and can repel or destroy lesser undead with a command. More powerful undead find their abilities suppressed and their will to engage the Priest diminished. Direct strikes from the Priest carry devastating holy charge against undead targets."
      }
    ]
  },
  {
    pathway: "Sun",
    sequence: 4,
    seqName: "Paladin",
    abilities: [
      {
        name: "Divine Strike",
        type: "active",
        desc: "The Paladin channels divine solar power directly through their physical attacks, causing strikes to carry devastating holy energy in addition to physical force. Against entities of darkness and corruption, Divine Strike is among the most effective direct attacks available. The charge can be built up and released in a single powerful blow or distributed across a series of attacks."
      },
      {
        name: "Holy Armor",
        type: "active",
        desc: "The Paladin can manifest an armor of light around themselves that absorbs physical and supernatural harm while simultaneously repelling entities that approach with hostile intent toward the Paladin or those they protect. The armor radiates a visible divine light that marks the Paladin as a champion of order. It can be extended partially to cover allies in close proximity."
      },
      {
        name: "Righteous Judgment",
        type: "active",
        desc: "The Paladin can invoke a moment of divine judgment on a target, exposing their actions and intentions to the scrutiny of solar law and inflicting proportional consequences for corruption, wrongdoing, or evil. The Judgment is not the Paladin's personal condemnation but a genuine channeling of divine authority. It is most devastating against beings who have committed profound evils."
      }
    ]
  },
  {
    pathway: "Sun",
    sequence: 3,
    seqName: "Prelate",
    abilities: [
      {
        name: "Solar Authority",
        type: "passive",
        desc: "The Prelate speaks and acts with the full authority of solar divinity behind them, causing their words and commands to carry a weight that affects even beings of tremendous power. This authority is not merely influential but ontologically real — the Prelate's decrees register in the fabric of reality. Beings of darkness and chaos cannot comfortably disregard the Prelate's presence."
      },
      {
        name: "Divine Edict",
        type: "active",
        desc: "The Prelate can issue Divine Edicts — commands backed by the full force of solar law — that bind their targets to compliance regardless of individual will. The Edict operates within the scope of the Prelate's divine mandate and cannot be used for arbitrary personal gain without diminishing its authority. Defying a Divine Edict brings escalating consequences."
      },
      {
        name: "Light of Judgment",
        type: "active",
        desc: "The Prelate can call down a manifestation of solar judgment on a target or area, an overwhelming revelation of divine light that sears corruption from existence and forces truth from concealment. Against beings of sufficient evil, the Light of Judgment can be immediately lethal. It also functions as an absolute purification ritual for locations or objects."
      }
    ]
  },

  // ============================================================
  // PATH 7: Darkness (Oscurità)
  // ============================================================
  {
    pathway: "Darkness",
    sequence: 9,
    seqName: "Assassin",
    abilities: [
      {
        name: "Shadow Step",
        type: "active",
        desc: "The Assassin can move through shadows as if they were physical passages, emerging from any shadow within range. This movement leaves no trace and bypasses physical obstacles, allowing them to cross walls or locked doors as long as shadows exist on both sides. The passage is instantaneous."
      },
      {
        name: "Silent Kill",
        type: "active",
        desc: "The Assassin can execute lethal attacks with absolute silence, suppressing all sound of the strike and the victim's response at the supernatural level. Not only does Silent Kill prevent noise, it erases the psychic impression of violence from the immediate area, preventing other supernatural senses from detecting the death. Only direct physical witnesses are aware of what occurred."
      },
      {
        name: "Poison Mastery",
        type: "passive",
        desc: "The Assassin has a comprehensive and supernaturally enhanced knowledge of toxins, allowing them to identify, prepare, and counter poisons of both mundane and extraordinary origin. Their own body metabolizes common poisons without harm, and they can prepare toxins of unusual potency from basic materials. They are also aware of the antidotes and vulnerabilities of poisons they work with."
      }
    ]
  },
  {
    pathway: "Darkness",
    sequence: 8,
    seqName: "Instigator",
    abilities: [
      {
        name: "Fear Induction",
        type: "active",
        desc: "The Instigator can project focused fear directly into a target's psyche, bypassing rational thought to trigger primal terror. The induced fear feels entirely real and internally generated rather than externally imposed. Severe enough doses can render targets temporarily catatonic or cause them to flee in uncontrolled panic."
      },
      {
        name: "Paranoia Planting",
        type: "active",
        desc: "The Instigator can seed paranoid thoughts in a target's mind that grow organically over time, making the target suspicious of allies, misinterpret neutral events as threatening, and gradually isolate themselves. The paranoia is indistinguishable from the target's own thoughts and feels internally generated. Left unchecked, it can destroy relationships and sanity."
      },
      {
        name: "Psychological Breakdown",
        type: "active",
        desc: "The Instigator can accelerate the collapse of a target's psychological resilience, pushing them rapidly toward breakdown through targeted supernatural pressure on their existing fears and traumas. The breakdown manifests differently in each individual but universally reduces their effectiveness and judgment. Recovery requires time away from the Instigator's influence."
      }
    ]
  },
  {
    pathway: "Darkness",
    sequence: 7,
    seqName: "Witch",
    abilities: [
      {
        name: "Hex Casting",
        type: "ritual",
        desc: "The Witch can craft and cast hexes — targeted supernatural curses that attach to a specific individual and cause ongoing misfortune in a chosen area of their life. Each hex is personalized to the target and the Witch's intent, and resists removal by anyone other than the caster. Hexes can be made to last for days, years, or until a specific condition is met."
      },
      {
        name: "Evil Eye",
        type: "active",
        desc: "With a focused gaze, the Witch can project malevolent supernatural energy that causes immediate physical harm or begins a cascade of misfortune in the target. The Evil Eye requires only a moment of direct visual contact and is difficult to defend against without prior supernatural warding. Its effects vary based on the Witch's intent and concentration."
      },
      {
        name: "Familiar Bonding",
        type: "ritual",
        desc: "The Witch can form a deep supernatural bond with an animal familiar, creating a two-way channel of perception and will. The familiar becomes a supernatural extension of the Witch, capable of independent action while remaining in constant psychic contact. Through the familiar, the Witch can perceive distant locations and act at range."
      }
    ]
  },
  {
    pathway: "Darkness",
    sequence: 6,
    seqName: "Soul Snatcher",
    abilities: [
      {
        name: "Soul Extraction",
        type: "active",
        desc: "The Soul Snatcher can forcibly pull a living person's soul from their body, leaving the body in a catatonic state while the soul is held separately. The extraction requires physical contact and a moment of focused will against the target's resistance. The extracted soul can be questioned, bartered with, or kept prisoner indefinitely."
      },
      {
        name: "Spiritual Possession",
        type: "active",
        desc: "The Soul Snatcher can project their consciousness into another body, displacing its original occupant and taking full control of the host. The possession gives them access to the host's physical capabilities and surface memories. The possessed body cannot long sustain the Soul Snatcher's nature, beginning to deteriorate after extended occupation."
      },
      {
        name: "Ghost Form",
        type: "active",
        desc: "The Soul Snatcher can temporarily shift their physical existence to a ghost-like state, becoming insubstantial and invisible while retaining full consciousness and supernatural capabilities. In Ghost Form they can pass through physical barriers, move silently, and are immune to conventional physical harm. Spiritual and beyonder attacks can still affect them."
      }
    ]
  },
  {
    pathway: "Darkness",
    sequence: 5,
    seqName: "Demon Hunter",
    abilities: [
      {
        name: "Demon Sight",
        type: "passive",
        desc: "The Demon Hunter can perceive demonic entities, corruption, and dark supernatural influences that are concealed from ordinary sight and most beyonder senses. This sight functions passively but can be intensified by concentration. It also allows the Hunter to assess the relative power and nature of what they observe."
      },
      {
        name: "Corruption Resistance",
        type: "passive",
        desc: "The Demon Hunter's nature is fundamentally resistant to corruption, dark possession, and demonic influence that would bend others to evil. This resistance is not immunity but makes the Hunter extraordinarily difficult to corrupt, possess, or alter through dark supernatural means. It also provides partial protection against the psychological effects of prolonged exposure to dark entities."
      },
      {
        name: "Exorcism",
        type: "ritual",
        desc: "The Demon Hunter can perform exorcism rituals that forcibly expel possessing entities, bound spirits, and corruption from affected individuals or locations. The ritual is calibrated to the strength of what is being expelled and requires sustained focus. Stronger entities may resist the exorcism and require multiple attempts or additional power sources."
      }
    ]
  },
  {
    pathway: "Darkness",
    sequence: 4,
    seqName: "Scarlet Scholar",
    abilities: [
      {
        name: "Blood Knowledge",
        type: "active",
        desc: "The Scarlet Scholar can extract comprehensive information from blood, reading not just medical data but memories, abilities, lineage, and the individual's beyonder nature. This knowledge extraction can be performed on shed blood without the original individual present. The depth of information retrieved increases with the amount of blood available."
      },
      {
        name: "Forbidden Research",
        type: "passive",
        desc: "The Scarlet Scholar can safely study and comprehend forbidden texts, rituals, and supernatural phenomena that would drive ordinary scholars insane or corrupt less experienced beyonders. Their mind is conditioned to contain and process dangerous knowledge without losing coherence. This allows them to accumulate understanding of the darkest aspects of the beyonder world."
      },
      {
        name: "Dark Ritual",
        type: "ritual",
        desc: "The Scarlet Scholar has mastered rituals that draw power from darkness, corruption, and forbidden forces without losing control of the process. These rituals can achieve effects unavailable through conventional beyonder paths, often at significant cost. The Scholar's expertise prevents the ritual from backfiring, which would be catastrophic with the energies involved."
      }
    ]
  },
  {
    pathway: "Darkness",
    sequence: 3,
    seqName: "Shadow Lord",
    abilities: [
      {
        name: "Shadow Domain",
        type: "active",
        desc: "The Shadow Lord can establish a domain of absolute darkness around themselves, extending their control over shadow and darkness throughout a vast area. Within the Shadow Domain, their authority over darkness-related phenomena is total and all others are disadvantaged. The domain itself acts as a weapon, crushing light and amplifying fear."
      },
      {
        name: "Darkness Embodiment",
        type: "passive",
        desc: "The Shadow Lord has merged so thoroughly with darkness that they are no longer entirely physical, partially existing as living shadow. In this state they are resistant to many forms of physical harm, can move through shadows without effort, and their presence causes the ambient light to dim. They are at their most powerful in total darkness."
      },
      {
        name: "Umbral Command",
        type: "active",
        desc: "The Shadow Lord commands absolute authority over all beings and phenomena of shadow and darkness within their domain. Entities of darkness obey without question, shadows bend and reach at their will, and even powerful dark beyonders feel the pull of their supremacy. Umbral Command is both a weapon and a crown."
      }
    ]
  },

  // ============================================================
  // PATH 8: Storm (Tempesta)
  // ============================================================
  {
    pathway: "Storm",
    sequence: 9,
    seqName: "Sailor",
    abilities: [
      {
        name: "Weather Sense",
        type: "passive",
        desc: "The Sailor can read weather patterns with supernatural accuracy, predicting changes hours or days in advance that would be invisible to experienced meteorologists. This sense extends to the supernatural aspects of weather, allowing them to identify storm events driven by beyonder or divine activity. They can also sense approaching sea-related dangers before they become visible."
      },
      {
        name: "Sea Navigation",
        type: "passive",
        desc: "The Sailor has an innate and supernaturally enhanced sense of position and direction at sea, able to navigate accurately without instruments even in featureless ocean or dense fog. This navigation instinct factors in currents, magnetic variations, and subtle supernatural features of the sea that ordinary instruments would miss. They cannot be lost at sea."
      },
      {
        name: "Knot Magic",
        type: "ritual",
        desc: "The Sailor can tie knots that carry supernatural properties, from wind-capturing knots that store and release gales to binding knots that hold beyond their physical capacity. The magic of knot-tying is an ancient maritime tradition that the Sailor has elevated to genuine beyonder capability. Different knot patterns produce different effects, and the Sailor knows dozens."
      }
    ]
  },
  {
    pathway: "Storm",
    sequence: 8,
    seqName: "Seafarer",
    abilities: [
      {
        name: "Wave Riding",
        type: "active",
        desc: "The Seafarer can ride the surface of water with supernatural stability and speed, treating even violent storm-tossed seas as manageable terrain. This extends to running across water at full speed without sinking, provided they maintain momentum. In combat, they can maneuver across water as fluidly as across solid ground."
      },
      {
        name: "Depth Diving",
        type: "active",
        desc: "The Seafarer can breathe underwater for extended periods and withstand pressures that would crush ordinary divers, allowing them to explore ocean depths safely. Their vision also adapts to submarine conditions. The ability is not indefinite but gives them far more time in the deep than any mundane diver."
      },
      {
        name: "Sea Creature Communication",
        type: "active",
        desc: "The Seafarer can communicate with marine creatures, from simple fish to intelligent beings like dolphins. The communication is not linguistic but conveys meaning clearly enough to exchange information, form temporary alliances, and ask for guidance. Sea creatures tend to be well-disposed toward the Seafarer and more forthcoming than they would be with strangers."
      }
    ]
  },
  {
    pathway: "Storm",
    sequence: 7,
    seqName: "Lightning Conductor",
    abilities: [
      {
        name: "Lightning Attraction",
        type: "active",
        desc: "The Lightning Conductor can draw lightning toward themselves or a designated point, reliably attracting electrical discharge from natural storms or other sources. This ability makes them a living lightning rod but also allows them to direct strikes with precision. Absorbed lightning can be channeled outward as the Conductor's own attack."
      },
      {
        name: "Electrical Discharge",
        type: "active",
        desc: "The Lightning Conductor can release accumulated electrical energy in controlled bursts, ranging from a precise small shock to a devastating burst of high-voltage current. The discharge can arc between multiple conducting targets in sequence. Metal armor and equipment make targets especially vulnerable to this ability."
      },
      {
        name: "Storm Sense",
        type: "passive",
        desc: "The Lightning Conductor can feel electrical and atmospheric phenomena at considerable range, sensing developing storms, other electrical discharges, and the approach of storm-pathway beyonders. This sense gives them a tactical picture of the surrounding environment in terms of weather and electrical activity. They can also sense the charge buildup that precedes a natural lightning strike."
      }
    ]
  },
  {
    pathway: "Storm",
    sequence: 6,
    seqName: "Squall",
    abilities: [
      {
        name: "Wind Blade",
        type: "active",
        desc: "The Squall can concentrate wind into razor-sharp cutting edges that slice with the force of a physical blade but extend to range and can be directed with precision. Wind Blades are invisible until they strike, making them very difficult to dodge even for experienced beyonders. Multiple blades can be generated and directed simultaneously."
      },
      {
        name: "Gale Force",
        type: "active",
        desc: "The Squall can generate localized winds of extreme velocity, strong enough to knock people off their feet, deflect projectiles, and erode structures over time. Gale Force can be sustained as a defensive wall or directed as a pushing blast. In combination with other storm abilities, it creates devastating compound effects."
      },
      {
        name: "Pressure Wave",
        type: "active",
        desc: "The Squall can release a sudden burst of compressed air as a shockwave that radiates outward from a point, knocking back anything in its path. The Pressure Wave is not particularly harmful in itself but is extraordinarily effective at disrupting formations, breaking concentration, and creating openings. A focused version can puncture through barriers."
      }
    ]
  },
  {
    pathway: "Storm",
    sequence: 5,
    seqName: "Cataclysm Priest",
    abilities: [
      {
        name: "Tempest Calling",
        type: "ritual",
        desc: "The Cataclysm Priest can summon a genuine storm from calm conditions, calling clouds, wind, and rain within minutes where there were none. The summoned tempest grows in severity over time if unimpeded and can be guided in terms of its area of effect. The storm is real meteorologically and must eventually dissipate naturally once called."
      },
      {
        name: "Lightning Storm",
        type: "active",
        desc: "The Cataclysm Priest can call down a concentrated barrage of lightning strikes on a targeted area, each bolt carrying supernatural destructive force beyond natural lightning. The storm of strikes can be sustained for multiple rounds, devastating anything in the target zone. The Priest can direct each bolt individually or release the pattern to strike in a spread."
      },
      {
        name: "Hurricane",
        type: "active",
        desc: "The Cataclysm Priest can summon and shape a full hurricane around a targeted point, with winds strong enough to flatten structures and a storm surge capable of flooding coastal areas. This ability operates at a scale that dwarfs other storm abilities and can affect battlefields, cities, or maritime areas. Sustaining it requires total concentration."
      }
    ]
  },
  {
    pathway: "Storm",
    sequence: 4,
    seqName: "Sea King",
    abilities: [
      {
        name: "Sea Domain",
        type: "active",
        desc: "The Sea King can establish dominion over an expanse of ocean, making the waters respond to their will as a living territory. Within the Sea Domain, currents, weather, depth, and marine life all fall under the King's authority. Intrusions into the domain are immediately detected and can be violently repelled."
      },
      {
        name: "Tidal Wave",
        type: "active",
        desc: "The Sea King can summon and direct enormous tidal waves of devastating scale, driving walls of water against coastlines or vessels with annihilating force. The Tidal Wave requires proximity to a significant body of water to generate and builds in size as it travels toward the target. It is one of the most destructive abilities in the storm pathway at this sequence."
      },
      {
        name: "Depth Authority",
        type: "active",
        desc: "The Sea King commands absolute authority over the creatures and phenomena of the deep ocean, which obey their commands as subjects to a ruler. Ancient and powerful sea creatures that would resist other beyonders serve the Sea King willingly. This authority also extends to the pressure and temperature of the deep, which the King can bring to the surface."
      }
    ]
  },
  {
    pathway: "Storm",
    sequence: 3,
    seqName: "Calamity",
    abilities: [
      {
        name: "Natural Disaster",
        type: "active",
        desc: "The Calamity can trigger and shape natural disasters of any type — earthquakes, floods, volcanic eruptions, tornadoes — on a scale that reshapes geography. These are not illusions but genuine geological and meteorological events, though they are initiated and directed by the Calamity's will. Once triggered, the disaster follows natural physics even if the Calamity disengages."
      },
      {
        name: "Catastrophe Embodiment",
        type: "passive",
        desc: "The Calamity has become one with the concept of catastrophe itself, gaining a passive aura that makes the environment around them subtly more prone to accidents, failures, and disasters. In times of active intent, this aura amplifies to a radius of destruction that makes simply existing near the Calamity dangerous. They are immune to the disasters they embody."
      },
      {
        name: "Storm Avatar",
        type: "active",
        desc: "The Calamity can transform into a living embodiment of storm and catastrophe, their physical form expanding into a manifestation of elemental fury. In Avatar form they become a mobile natural disaster in humanoid shape, wielding the full force of every storm ability simultaneously. The transformation is temporary but during it they are among the most destructive forces in the mortal world."
      }
    ]
  },

  // ============================================================
  // PATH 9: Earth (Terra)
  // ============================================================
  {
    pathway: "Earth",
    sequence: 9,
    seqName: "Planter",
    abilities: [
      {
        name: "Plant Growth Acceleration",
        type: "active",
        desc: "The Planter can cause plants to grow at dramatically accelerated rates, compressing months of growth into minutes. The accelerated growth can be directed — causing vines to reach, roots to spread, or trees to rise — making it useful in both agricultural and combat contexts. The growth is genuine biological development, not a temporary magical effect."
      },
      {
        name: "Seed Empowerment",
        type: "ritual",
        desc: "The Planter can infuse seeds with supernatural potential before planting, causing the resulting plants to grow stronger, more resilient, and more productive than their species would normally allow. Empowered seeds also grow to display properties not natural to their species, such as unusual durability or mild chemical properties. The empowerment is permanent."
      },
      {
        name: "Harvest Blessing",
        type: "ritual",
        desc: "The Planter can bless a cultivated area to ensure an abundant harvest regardless of weather conditions, soil quality, or pest pressure. The blessing works with nature rather than against it, amplifying the natural fertility of the land to extraordinary levels. A Harvest Blessing applied to a region can prevent famine for an entire season."
      }
    ]
  },
  {
    pathway: "Earth",
    sequence: 8,
    seqName: "Doctor",
    abilities: [
      {
        name: "Diagnosis",
        type: "active",
        desc: "The Doctor can diagnose any illness or poisoning with supernatural accuracy, identifying the nature, source, and progression of an affliction faster than any mundane medical examination could reveal. This diagnosis extends to supernatural diseases, curses manifesting as illness, and beyonder-derived toxins. The information provided includes the optimal treatment path."
      },
      {
        name: "Herbal Remedy",
        type: "ritual",
        desc: "The Doctor can prepare herbal remedies of extraordinary efficacy, treating conditions that would resist conventional medicine. Their remedies accelerate healing, neutralize toxins, and address even supernatural afflictions if the correct components are assembled. The Doctor's preparation imbues the remedy with a subtle beyonder energy that enhances its natural properties."
      },
      {
        name: "Wound Closing",
        type: "active",
        desc: "The Doctor can close wounds through touch-assisted supernatural acceleration of the body's own healing processes, stopping bleeding, closing lacerations, and knitting bone at a pace that appears miraculous. The healing is genuine biological restoration rather than illusory. Extensive or complex wounds require more time and energy to fully close."
      }
    ]
  },
  {
    pathway: "Earth",
    sequence: 7,
    seqName: "Harvest Priest",
    abilities: [
      {
        name: "Fertility Blessing",
        type: "ritual",
        desc: "The Harvest Priest can bestow blessings of fertility on land, animals, and people, increasing the likelihood of healthy conception and abundant growth. The blessing aligns the recipients with the natural generative forces of the earth, creating conditions unusually favorable to life and growth. It can also be used to restore fertility lost to curse or supernatural blight."
      },
      {
        name: "Crop Enhancement",
        type: "ritual",
        desc: "The Harvest Priest can substantially enhance the yield, quality, and resilience of crops, producing harvests that far exceed what the climate, soil, and season would normally allow. Enhanced crops resist blights, pests, and weather events that would destroy unprotected fields. The enhancement fades naturally at the end of the growing season."
      },
      {
        name: "Nature Communion",
        type: "active",
        desc: "The Harvest Priest can enter direct communion with the spiritual essence of natural areas, reading the health of ecosystems, communicating with nature spirits, and feeling the subtle shifts in the land's vitality. Through communion, they can identify sources of blight, pollution, or supernatural harm to the land. Nature spirits tend to be forthcoming with the Harvest Priest."
      }
    ]
  },
  {
    pathway: "Earth",
    sequence: 6,
    seqName: "Biologist",
    abilities: [
      {
        name: "Creature Study",
        type: "active",
        desc: "The Biologist can examine a living creature and gain comprehensive understanding of its biology, supernatural properties, abilities, and vulnerabilities in moments of focused observation. This study reveals not just surface anatomy but the beyonder or spiritual properties of extraordinary creatures. The information is immediately available and accurate."
      },
      {
        name: "Evolution Acceleration",
        type: "active",
        desc: "The Biologist can trigger rapid directed evolution in a target organism, causing it to develop new adaptations or enhance existing ones at a pace that would normally take generations. The evolutionary direction can be guided by the Biologist's intent but also draws from the organism's inherent evolutionary potential. The changes become hereditary if the organism reproduces."
      },
      {
        name: "Species Alteration",
        type: "ritual",
        desc: "Through extended ritual, the Biologist can alter the fundamental nature of a species, changing core traits across all existing members or creating a stable new variant. These alterations propagate through reproduction and persist indefinitely. The scope of alteration possible increases with the power invested in the ritual and the time taken."
      }
    ]
  },
  {
    pathway: "Earth",
    sequence: 5,
    seqName: "Druid",
    abilities: [
      {
        name: "Nature Form",
        type: "active",
        desc: "The Druid can transform their body into the form of any animal or plant they have closely studied, gaining that organism's physical capabilities while retaining their own consciousness and beyonder power. The transformation is complete and not merely cosmetic, granting genuine biological function. They can assume hybrid forms that blend human and natural elements."
      },
      {
        name: "Wilderness Walk",
        type: "passive",
        desc: "The Druid moves through natural environments with supernatural ease, leaving no trail, making no noise, and suffering no impediment from difficult terrain, thorns, mud, or adverse weather. Natural hazards seem to step aside for them as if by mutual agreement. This passage extends to allies who remain close and follow the Druid's exact path."
      },
      {
        name: "Earth Bond",
        type: "active",
        desc: "The Druid can forge a deep temporary bond with a specific location of natural land, gaining complete sensory awareness of everything that touches that land and the ability to manipulate its features directly. Within the bonded area, the Druid has a close-range equivalent of omniscience regarding physical events. The bond breaks when they leave the area."
      }
    ]
  },
  {
    pathway: "Earth",
    sequence: 4,
    seqName: "Ancient Alchemist",
    abilities: [
      {
        name: "Transmutation",
        type: "active",
        desc: "The Ancient Alchemist can alter the material nature of substances, changing their elemental composition, physical properties, and chemical behavior through focused beyonder application. Unlike mundane chemistry, this transmutation occurs instantaneously and can produce results that violate conventional material science. The Alchemist can work with metals, organic materials, and supernatural substances."
      },
      {
        name: "Elemental Binding",
        type: "ritual",
        desc: "The Ancient Alchemist can summon and bind elemental forces, creatures, and essences to objects, people, or locations, imbuing them with lasting elemental properties. Bound elemental earth grants permanence and endurance; bound elemental wood grants growth and adaptability. The binding is sealed through alchemical ritual and endures until deliberately broken."
      },
      {
        name: "Philosopher's Stone Research",
        type: "ritual",
        desc: "The Ancient Alchemist can conduct research into the legendary Philosopher's Stone, making genuine progress toward understanding this ultimate alchemical goal. Each research session yields insights that translate into practical alchemical improvements. The research path is long, but each advance grants the Alchemist abilities that approach the Stone's legendary capabilities."
      }
    ]
  },
  {
    pathway: "Earth",
    sequence: 3,
    seqName: "Pallbearer",
    abilities: [
      {
        name: "Earth Domain",
        type: "active",
        desc: "The Pallbearer can establish dominion over a region of earth, making the soil, stone, and natural growth respond directly to their will. Within the Earth Domain, the ground can be raised, lowered, split, or compressed, and plant life grows or withers at the Pallbearer's command. The domain's extent scales with the Pallbearer's power and intent."
      },
      {
        name: "Tectonic Control",
        type: "active",
        desc: "The Pallbearer can reach into the deep geological forces beneath the surface and influence tectonic activity, from minor tremors to full earthquake events. This control requires significant concentration and builds gradually, but the resulting seismic events are genuine geological phenomena with real-world consequences. Precise control allows damage to be targeted while minimizing collateral harm."
      },
      {
        name: "Stone Avatar",
        type: "active",
        desc: "The Pallbearer can assume a form partially or fully composed of stone and earth, dramatically enhancing their physical durability while maintaining supernatural mobility and combat capability. In Stone Avatar form they resist most conventional weapons and many beyonder attacks. The transformation imbues their physical strikes with the crushing weight of geological force."
      }
    ]
  },

  // ============================================================
  // PATH 10: Evernight (Notte Eterna)
  // ============================================================
  {
    pathway: "Evernight",
    sequence: 9,
    seqName: "Sleepless",
    abilities: [
      {
        name: "No Sleep Needed",
        type: "passive",
        desc: "The Sleepless no longer requires sleep to maintain physical or mental function, achieving whatever rest they need in brief meditative moments or through continuous activity. The absence of sleep vulnerability eliminates a significant tactical weakness and allows them to operate continuously. They remain fully alert after days of uninterrupted activity."
      },
      {
        name: "Nightmare Immunity",
        type: "passive",
        desc: "The Sleepless is completely immune to nightmare-based attacks, dream intrusion, and fear-based supernatural effects that operate through the sleeping mind. When they do rest, their mental environment is perfectly tranquil regardless of external supernatural attempts to disturb it. They also cannot be put to sleep against their will by supernatural means."
      },
      {
        name: "Vigilance",
        type: "passive",
        desc: "The Sleepless maintains a state of constant supernatural alertness, aware of their surroundings with full clarity at all times without the periodic lapses that affect normal human consciousness. Attempts to take them by surprise face an extraordinarily high threshold of concealment. Their reactions are always at peak readiness."
      }
    ]
  },
  {
    pathway: "Evernight",
    sequence: 8,
    seqName: "Night Watchman",
    abilities: [
      {
        name: "Night Vision",
        type: "passive",
        desc: "The Night Watchman sees perfectly in total darkness, with vision that is as clear and detailed at night as in full daylight. Unlike darkvision that reduces color, their night vision is complete, allowing them to distinguish fine details, read text, and identify individuals in pitch blackness. Supernatural darkness is partially penetrated as well."
      },
      {
        name: "Silent Movement",
        type: "passive",
        desc: "The Night Watchman moves with supernatural silence, suppressing the sound of their footsteps, clothing movement, and breathing below the threshold of any normal hearing. Even enhanced hearing requires beyonder-level perception to detect the Night Watchman's passage. This silence extends to equipment they carry and doors they open."
      },
      {
        name: "Darkness Blend",
        type: "active",
        desc: "The Night Watchman can merge with shadows and darkness, becoming effectively invisible to sight and most supernatural perception when concealed in dim conditions or darkness. The blend is more complete in deeper darkness. When they remain motionless, even targeted magical search may fail to locate them. Movement risks breaking the concealment."
      }
    ]
  },
  {
    pathway: "Evernight",
    sequence: 7,
    seqName: "Midnight Poet",
    abilities: [
      {
        name: "Dream Verse",
        type: "active",
        desc: "The Midnight Poet can compose and recite verse that reaches directly into the dream-space of listeners, affecting their dreams that night in ways prescribed by the poem's content. The verse can plant specific scenarios, emotions, or messages in the dreamer's dream experience. The effect is subtle but can be used to deliver information, influence mood, or gently alter perspectives over time."
      },
      {
        name: "Nightmare Weaving",
        type: "active",
        desc: "The Midnight Poet can craft targeted nightmares and deliver them to sleeping individuals at a distance, constructing dream-experiences of genuine terror that the dreamer cannot distinguish from reality. Recurring nightmares woven by the Poet erode the target's rest and psychological stability. The Poet can participate in the nightmares they craft."
      },
      {
        name: "Sleep Induction",
        type: "active",
        desc: "The Midnight Poet can induce sleep in a target through a spoken verse or a sustained gaze, causing them to drift into unconsciousness regardless of their intent to remain awake. The induced sleep is difficult to wake from prematurely without external intervention. Strong-willed or beyonder targets can resist but must make active effort to do so."
      }
    ]
  },
  {
    pathway: "Evernight",
    sequence: 6,
    seqName: "Nightmare",
    abilities: [
      {
        name: "Fear Embodiment",
        type: "passive",
        desc: "The Nightmare has become a partial embodiment of fear itself, projecting an aura of primal dread that weakens the resolve of all who encounter them. This aura is constant and unconscious, requiring effort to suppress in social situations. At full expression, the fear aura can drive ordinary people to flee and shake the confidence of experienced beyonders."
      },
      {
        name: "Nightmare Entry",
        type: "active",
        desc: "The Nightmare can physically enter the dream space of a sleeping individual, manifesting in their nightmare as a real presence capable of interacting with the dream environment and the dreamer. Within the nightmare, the Nightmare has significant power over the dream's content and rules. Harm inflicted within the dream carries a limited real-world component."
      },
      {
        name: "Horror Aura",
        type: "active",
        desc: "The Nightmare can intensify their passive fear aura into an active surge of supernatural horror, projecting a wave of existential terror that breaks morale and causes physical symptoms of extreme fear. This active Horror Aura can incapacitate multiple targets simultaneously. Beyonders who resist still find their effectiveness dramatically reduced during exposure."
      }
    ]
  },
  {
    pathway: "Evernight",
    sequence: 5,
    seqName: "Soul Assurer",
    abilities: [
      {
        name: "Dream Walking",
        type: "active",
        desc: "The Soul Assurer can move freely through the collective dream space, visiting the dreams of any sleeping individual whose dreaming mind they can locate. Within dreams, they are a lucid and powerful presence capable of reshaping dream environments and communicating with the dreamer. They can extract information, provide comfort, or deliver messages through this capability."
      },
      {
        name: "Collective Dream",
        type: "active",
        desc: "The Soul Assurer can gather multiple dreamers into a shared dream space, allowing them to communicate, share experiences, or take part in a common dream scenario simultaneously. The collective dream can be fully under the Soul Assurer's direction or can be a collaborative space. Information shared in the Collective Dream is retained by participants upon waking."
      },
      {
        name: "Sleep Domain",
        type: "active",
        desc: "The Soul Assurer can establish a domain of deep, unbreakable sleep over an area, causing all susceptible beings within range to fall into profound unconsciousness. Within the Sleep Domain, the Soul Assurer's dream-related abilities are dramatically amplified. Waking those asleep within the domain requires dispelling the Soul Assurer's authority over that space."
      }
    ]
  },
  {
    pathway: "Evernight",
    sequence: 4,
    seqName: "Demoness",
    abilities: [
      {
        name: "Demonic Form",
        type: "active",
        desc: "The Demoness can manifest their true supernatural nature, assuming a form that blends dark beauty with demonic power. In Demonic Form, their physical capabilities are dramatically enhanced and their beyonder abilities intensified. The form is deeply disturbing to those sensitive to supernatural evil, and even ordinary people feel an instinctive wrongness in its presence."
      },
      {
        name: "Seduction Aura",
        type: "active",
        desc: "The Demoness can project an aura of irresistible supernatural attraction, causing targets to feel overwhelming desire and fascination that overrides normal caution and reason. This seduction is not merely physical but reaches into the target's deepest psychological needs and presents the Demoness as the answer to them. Individuals with strong will or spiritual protection resist but feel the pull."
      },
      {
        name: "Soul Binding",
        type: "ritual",
        desc: "The Demoness can bind a willing or defeated target's soul to themselves, creating a supernatural claim over that individual that persists beyond physical death. The bound soul is partially under the Demoness's influence while its owner lives and fully collectible upon their death. Breaking a Soul Binding requires power exceeding that of the Demoness who created it."
      }
    ]
  },
  {
    pathway: "Evernight",
    sequence: 3,
    seqName: "Demon God",
    abilities: [
      {
        name: "Demon Domain",
        type: "active",
        desc: "The Demon God can establish a domain of demonic influence that transforms the surrounding environment into an extension of the demonic realm. Within the Demon Domain, all of the Demon God's abilities are amplified, and beings of light and order find their powers suppressed. The domain radiates an oppressive supernatural darkness that dims hope itself."
      },
      {
        name: "Hell Authority",
        type: "passive",
        desc: "The Demon God wields authority over demonic entities and hell-adjacent realms that is recognized as sovereign dominion. Demonic beings obey without question, and the structures of the demonic realm itself bend to the Demon God's will. This authority extends to command of souls condemned to infernal states and to the powers of darkness on a cosmic scale."
      },
      {
        name: "Corruption Mastery",
        type: "active",
        desc: "The Demon God has achieved total mastery over corruption as a force, able to corrupt any entity or concept with a touch of will. This mastery allows them to corrupt divine artifacts, sanctified ground, or even the principles of other beyonders. The corruption spreads from the initial target, making the Demon God's influence a self-propagating blight without countermeasure short of divine intervention."
      }
    ]
  },

  // ============================================================
  // PATH 11: Knowledge (Conoscenza / Secret Pryer)
  // ============================================================
  {
    pathway: "Knowledge",
    sequence: 9,
    seqName: "Reader",
    abilities: [
      {
        name: "Speed Reading",
        type: "active",
        desc: "The Reader can absorb and fully comprehend written material at extraordinary speed, processing entire books in the time it would normally take to scan a page. The comprehension is genuine understanding, not mere memorization, with full context and nuance retained. This ability can be applied to encrypted or coded texts with enhanced analytical power."
      },
      {
        name: "Memory Enhancement",
        type: "passive",
        desc: "The Reader's memory has been enhanced to near-perfect retention and recall, storing everything they observe with crystalline clarity and retrieving it effortlessly. Information is not merely stored but organized in an intuitive mental architecture that makes cross-referencing and analysis rapid. They never misremember and do not forget."
      },
      {
        name: "Knowledge Retention",
        type: "passive",
        desc: "Knowledge acquired by the Reader is deeply integrated into their understanding rather than sitting as surface information. Supernatural attempts to erase or alter their memories have limited effect due to the depth at which knowledge is embedded. They can reconstruct erased memories from contextual clues because the understanding persists even when surface recall is disrupted."
      }
    ]
  },
  {
    pathway: "Knowledge",
    sequence: 8,
    seqName: "Listener",
    abilities: [
      {
        name: "Enhanced Hearing",
        type: "passive",
        desc: "The Listener can perceive sounds beyond the normal human auditory range, including supernatural vibrations, whispers at extreme distances, and the subtle resonances left behind after sounds have faded. This hearing is selective and can be focused to isolate specific sound sources in noisy environments. They can hear conversations through walls, floors, and other sound barriers."
      },
      {
        name: "Secret Listening",
        type: "active",
        desc: "The Listener can tune into private conversations happening at significant distances, bypassing conventional obstacles to sound transmission by reaching through the acoustic medium at a supernatural level. Active magical silencing can block Secret Listening, but mundane barriers offer no protection. The Listener can maintain multiple simultaneous channels of Secret Listening."
      },
      {
        name: "Whisper Detection",
        type: "active",
        desc: "The Listener can detect and interpret whispers and barely audible communications that are meant to be inaudible, picking up not just the words but the emotional tone and intent behind them. This ability also extends to detecting hidden messages embedded in seemingly normal speech. They can identify whether a speaker is using coded language or double meanings."
      }
    ]
  },
  {
    pathway: "Knowledge",
    sequence: 7,
    seqName: "Scroll Professor",
    abilities: [
      {
        name: "Scroll Writing",
        type: "ritual",
        desc: "The Scroll Professor can create magical scrolls that capture and preserve beyonder abilities, spells, or information in a form that can be activated by another person. Each scroll is a miniature ritual container, requiring precise inscription and the investment of genuine beyonder power. The scrolls are reliable and consistent, activating exactly as the Professor intends."
      },
      {
        name: "Rune Mastery",
        type: "passive",
        desc: "The Scroll Professor has comprehensive knowledge of runic writing systems from multiple supernatural traditions, allowing them to read, create, and modify runes with expert understanding. They can identify the properties and dangers of unknown runes on sight and can combine runic elements from different traditions to create hybrid effects. Their inscribed runes are more potent than those of less experienced practitioners."
      },
      {
        name: "Scroll Activation",
        type: "active",
        desc: "The Scroll Professor can activate magical scrolls with greater precision and power than the scroll's original intended method, extracting maximum effectiveness from each scroll they use. They can also activate scrolls that are partially damaged or whose activation method has been obscured. In their hands, ordinary scrolls become significantly more effective."
      }
    ]
  },
  {
    pathway: "Knowledge",
    sequence: 6,
    seqName: "Astrologer",
    abilities: [
      {
        name: "Star Reading",
        type: "active",
        desc: "The Astrologer can divine information about present events, hidden truths, and probable futures by reading the configuration of stars and celestial bodies. This divination connects to genuine supernatural information rather than producing vague generalities. The accuracy and detail of the reading depends on the clarity of the sky and the Astrologer's focus."
      },
      {
        name: "Constellation Magic",
        type: "active",
        desc: "The Astrologer can draw power from specific star constellations, channeling the qualities those constellations represent into active supernatural effects. Different constellations yield different results: some grant strength, others wisdom, protection, or prophetic sight. The magic is most powerful when the target constellation is at its highest point in the sky."
      },
      {
        name: "Astronomical Prediction",
        type: "active",
        desc: "The Astrologer can calculate the future positions of celestial bodies and extract from those calculations precise predictions about events that will occur at corresponding times. These predictions are not vague but specific, identifying events, locations, and outcomes with high accuracy. Events tied to major celestial events are the most clearly visible through this ability."
      }
    ]
  },
  {
    pathway: "Knowledge",
    sequence: 5,
    seqName: "Mysticologist",
    abilities: [
      {
        name: "Mystery Sight",
        type: "active",
        desc: "The Mysticologist can perceive the fundamental mysteries underlying reality, seeing the hidden structures of supernatural phenomena, the true nature of beyonder pathways, and the deeper mechanisms behind events that appear coincidental. This sight reveals layers of meaning invisible to ordinary beyonder perception. Extremely profound mysteries may only be partially comprehensible."
      },
      {
        name: "Ancient Knowledge",
        type: "passive",
        desc: "The Mysticologist has accumulated and internalized vast stores of knowledge about the supernatural world's history, hidden lore, and the secrets of the Beyonder system. This knowledge base is not merely encyclopedic but deeply integrated, allowing rapid synthesis of new information against the backdrop of what they already know. They can accurately identify extremely obscure supernatural phenomena."
      },
      {
        name: "Forbidden Text Reading",
        type: "active",
        desc: "The Mysticologist can safely read texts that would drive ordinary scholars insane, protected by their deep understanding and psychological conditioning. The reading yields full comprehension of the forbidden content without the mental contamination that normally accompanies such exposure. They can also read texts in languages and scripts they have never previously encountered."
      }
    ]
  },
  {
    pathway: "Knowledge",
    sequence: 4,
    seqName: "Clairvoyant",
    abilities: [
      {
        name: "Prophecy",
        type: "active",
        desc: "The Clairvoyant can actively access prophetic vision, perceiving possible and probable futures with a clarity that goes beyond the fragmentary glimpses available to lesser seers. The prophecies are detailed, specific, and more reliably accurate than those of lower-sequence diviners. The Clairvoyant can target their prophetic sight on specific questions or individuals."
      },
      {
        name: "Remote Viewing",
        type: "active",
        desc: "The Clairvoyant can project their vision to any location they can conceptually target, observing events happening at distances that make physical presence impossible. The remote view is a passive observation that does not interact with the observed location. It pierces most mundane concealment, though powerful supernatural wards can block or misdirect the view."
      },
      {
        name: "Temporal Glimpse",
        type: "active",
        desc: "The Clairvoyant can briefly look backward or forward in time, observing what occurred or will occur at a specific location with their remote viewing capability extended across the time axis. Past events are more reliable than future ones, which still represent probability rather than certainty. The depth of past or future that can be observed increases with the Clairvoyant's power."
      }
    ]
  },
  {
    pathway: "Knowledge",
    sequence: 3,
    seqName: "Sage",
    abilities: [
      {
        name: "Information Storm",
        type: "active",
        desc: "The Sage can release a torrent of pure knowledge as an active ability, overwhelming targets with information they cannot process, creating mental disruption that ranges from confusion to catatonia. Alternatively, the Information Storm can be used beneficially to transmit vast bodies of knowledge to willing recipients simultaneously. The experience of receiving an Information Storm is profound and disorienting."
      },
      {
        name: "Knowledge Manifestation",
        type: "active",
        desc: "The Sage can give physical reality to pure knowledge, manifesting information as tangible constructs or forces. A manifested understanding of fire produces actual flame; manifested knowledge of a location creates a passage to it. This ability treats knowledge as a literal form of reality-shaping power. The constructs are as real as the knowledge that generates them."
      },
      {
        name: "Omniscience Touch",
        type: "active",
        desc: "Through physical contact, the Sage can briefly access a state of near-omniscient awareness about the thing they touch, learning its complete history, nature, hidden properties, and future trajectory. Applied to people, it reveals their innermost thoughts, hidden memories, and destiny. The experience of being known this completely is deeply disturbing to most recipients."
      }
    ]
  },

  // ============================================================
  // PATH 12: Paragon
  // ============================================================
  {
    pathway: "Paragon",
    sequence: 9,
    seqName: "Savant",
    abilities: [
      {
        name: "Rapid Learning",
        type: "passive",
        desc: "The Savant acquires new skills and knowledge at a dramatically accelerated rate, absorbing what would take others years of study in weeks or months. This rapid acquisition is not superficial but reflects genuine deep understanding. A Savant can become competent in a new field through brief exposure that would leave an ordinary person barely scratching the surface."
      },
      {
        name: "Skill Mastery",
        type: "passive",
        desc: "When the Savant applies themselves to a skill or discipline, they achieve a level of mastery that goes beyond what their time investment would predict. The mastery is comprehensive rather than specialized, giving them robust capability across the full breadth of a discipline. This ability makes them formidable generalists with few exploitable gaps in knowledge."
      },
      {
        name: "Analysis",
        type: "active",
        desc: "The Savant can apply their enhanced analytical faculties to any problem, rapidly breaking it down into comprehensible components and identifying solutions that would be missed by ordinary or even expert-level reasoning. This analysis works on supernatural phenomena as well as mundane problems. The results of an Analysis session are reliable and can be communicated clearly to others."
      }
    ]
  },
  {
    pathway: "Paragon",
    sequence: 8,
    seqName: "Archaeologist",
    abilities: [
      {
        name: "Ruin Reading",
        type: "active",
        desc: "The Archaeologist can examine ruins and ancient sites and read their complete history, perceiving the events that occurred there as layered impressions accessible to their trained beyonder sense. The reading is more detailed and accurate than any documentary record would allow. They can distinguish periods, identify significant events, and even get impressions of specific individuals who were present."
      },
      {
        name: "Ancient Object Appraisal",
        type: "active",
        desc: "The Archaeologist can assess any ancient or historical object and immediately understand its origin, purpose, history of ownership, and current supernatural properties if any. This appraisal is definitive rather than probabilistic, providing certain knowledge rather than educated guesses. It extends to recognizing forgeries, however skillfully made."
      },
      {
        name: "History Vision",
        type: "active",
        desc: "By touching a surface or object with historical significance, the Archaeologist can observe past events at that location as a visual-sensory replay. The vision is not just visual but engages all senses and conveys the emotional atmosphere of the period observed. The depth of history accessible increases with the Archaeologist's power and the significance of the site."
      }
    ]
  },
  {
    pathway: "Paragon",
    sequence: 7,
    seqName: "Appraiser",
    abilities: [
      {
        name: "Object Reading",
        type: "active",
        desc: "The Appraiser can handle any object and immediately perceive its history, previous owners, current properties, and hidden features or dangers. This reading is rapid and comprehensive, providing more information in seconds than a team of experts could compile in days. Objects with supernatural histories yield particularly rich readings."
      },
      {
        name: "Value Assessment",
        type: "active",
        desc: "The Appraiser can determine the true value of anything — material objects, agreements, information, relationships — with supernatural accuracy that cuts through deliberate misrepresentation, ignorance, and market manipulation. This assessment accounts for supernatural value components that mundane appraisal would miss entirely. The Appraiser cannot be deceived about worth."
      },
      {
        name: "Authenticity Detection",
        type: "active",
        desc: "The Appraiser can instantly determine whether anything presented as genuine is in fact authentic or a fabrication, including supernatural artifacts, historical documents, claimed identities, and stated facts. Sophisticated forgeries that would fool experts are transparent to the Appraiser. This ability applies equally to physical objects and to claims and representations."
      }
    ]
  },
  {
    pathway: "Paragon",
    sequence: 6,
    seqName: "Mechanical Expert",
    abilities: [
      {
        name: "Machine Communion",
        type: "active",
        desc: "The Mechanical Expert can interface directly with any machine or mechanical device, intuitively understanding its function, current state, faults, and potential modifications in moments of contact. This communion extends to devices they have never previously encountered and to machines of supernatural or beyonder construction. In their hands, machines operate with supernatural reliability."
      },
      {
        name: "Blueprint Reading",
        type: "active",
        desc: "The Mechanical Expert can read any technical schematic or blueprint and immediately comprehend the intended design, identify deviations in construction, spot design flaws, and envision improvements. This extends to diagrams and schematics from cultures and periods they have not previously studied. They can also create accurate blueprints of machines they have only briefly observed."
      },
      {
        name: "Mechanical Enhancement",
        type: "active",
        desc: "The Mechanical Expert can enhance mechanical devices beyond their design specifications, improving performance, durability, and capabilities through both mundane expertise and subtle beyonder influence. Enhanced devices operate more efficiently, break down less frequently, and produce results beyond their component materials' inherent limits. The enhancement is stable and does not require ongoing attention."
      }
    ]
  },
  {
    pathway: "Paragon",
    sequence: 5,
    seqName: "Astronomer",
    abilities: [
      {
        name: "Celestial Reading",
        type: "active",
        desc: "The Astronomer can read the celestial sphere with extraordinary precision, extracting information about supernatural events, hidden forces, and the movements of powerful beings from the configuration of stars, planets, and other celestial phenomena. Their readings are more accurate and detailed than those of any mundane astronomer or astrologer. They can identify celestial events months or years in advance."
      },
      {
        name: "Cosmic Awareness",
        type: "passive",
        desc: "The Astronomer maintains a constant background awareness of the cosmic scale of events, feeling the subtle ripples that significant supernatural occurrences send through the fabric of reality at the celestial level. This awareness gives them early warning of major events and a sense of their relative scale. They intuitively understand how local events connect to larger cosmic patterns."
      },
      {
        name: "Star Navigation",
        type: "passive",
        desc: "The Astronomer can navigate by the stars with supernatural accuracy, finding their position and determining direction anywhere on the planet's surface or even in unusual planes of existence where stars are visible. This navigation extends to finding paths to non-physical destinations that can be charted against the celestial sphere. They are never lost as long as stars are visible."
      }
    ]
  },
  {
    pathway: "Paragon",
    sequence: 4,
    seqName: "Alchemist",
    abilities: [
      {
        name: "Advanced Transmutation",
        type: "active",
        desc: "The Alchemist can perform transmutations of extraordinary complexity and precision, converting substances between states that would require far more effort through mundane chemistry. These transmutations work on spiritual and supernatural materials as well as physical ones. The Alchemist can reverse engineer the composition of complex substances by transmuting them to their components."
      },
      {
        name: "Philosopher's Formula",
        type: "ritual",
        desc: "The Alchemist possesses formulas of extraordinary sophistication that produce results approaching the legendary Philosopher's Stone in specific domains. These formulas can extend life, perfect materials, create potent elixirs, or transmute base materials to precious ones through a combination of genuine alchemy and beyonder power. Each formula requires rare materials and precise execution."
      },
      {
        name: "Elemental Mastery",
        type: "active",
        desc: "The Alchemist commands mastery over the classical elements and their interactions, able to summon, shape, transmute, and balance elemental forces with precision that allows effects unavailable through brute elemental control. This mastery understands elements as principles rather than mere substances, allowing philosophical as well as physical applications. Elemental entities respect this mastery."
      }
    ]
  },
  {
    pathway: "Paragon",
    sequence: 3,
    seqName: "Arcane Scholar",
    abilities: [
      {
        name: "Arcane Domain",
        type: "active",
        desc: "The Arcane Scholar can establish a domain of pure arcane knowledge, an area where the rules of reality are supplemented by the Scholar's comprehensive understanding of supernatural law. Within the Arcane Domain, the Scholar can manipulate the mechanics of beyonder abilities, alter the rules of supernatural interactions, and access depths of arcane knowledge that are inaccessible outside it. Other beyonders find their abilities operating differently in this domain."
      },
      {
        name: "Forbidden Knowledge",
        type: "passive",
        desc: "The Arcane Scholar has accumulated and integrated forbidden knowledge that no other sequence in the world possesses, understanding aspects of the Beyonder system, the nature of the great old ones, and the deep structure of supernatural reality that other beyonders can only speculate about. This knowledge is a weapon, a defense, and a responsibility simultaneously. It cannot be safely shared with most."
      },
      {
        name: "Universal Theory",
        type: "active",
        desc: "The Arcane Scholar can apply their unified theory of the supernatural to any phenomenon they encounter, immediately deriving the rules, weaknesses, and methods of interaction applicable to completely novel entities or abilities. This analytical framework lets them engage effectively with things that no existing knowledge base covers. In practice, nothing supernatural is truly foreign to them."
      }
    ]
  }
];

async function populateCompendium() {
  // Find the compendium pack
  let pack = game.packs.get("lotm.lotm-abilities");
  if (!pack) {
    ui.notifications.warn("Pack 'lotm.lotm-abilities' non trovato. Assicurarsi che il sistema sia installato correttamente.");
    console.error("[LotM] Pack 'lotm.lotm-abilities' not found in game.packs. Available packs:", [...game.packs.keys()]);
    return;
  }

  // ── Sblocca il compendio (i compendi di sistema sono bloccati di default) ──
  await pack.configure({ locked: false });
  console.log(`[LotM] Compendio sbloccato: ${pack.collection}`);
  console.log(`[LotM] Inizio popolamento compendio: ${pack.collection}`);
  ui.notifications.info("Inizio creazione abilità LotM nel compendio...");

  // Clear existing entries to avoid duplicates on re-run
  const existingDocs = await pack.getDocuments();
  if (existingDocs.length > 0) {
    const confirmed = await Dialog.confirm({
      title: "Compendio non vuoto",
      content: `<p>Il compendio contiene già <strong>${existingDocs.length}</strong> documenti.</p><p>Vuoi cancellare tutto e ricominciare da capo?</p>`,
      yes: () => true,
      no: () => false,
    });
    if (confirmed) {
      console.log(`[LotM] Eliminazione di ${existingDocs.length} documenti esistenti...`);
      const ids = existingDocs.map(d => d.id);
      await Item.deleteDocuments(ids, { pack: pack.collection });
      console.log("[LotM] Documenti esistenti eliminati.");
    } else {
      ui.notifications.warn("Operazione annullata. Nessuna modifica apportata.");
      return;
    }
  }

  let created = 0;
  const errors = [];

  for (const pathway of PATHWAY_DATA) {
    for (const ability of pathway.abilities) {
      const itemData = {
        name: ability.name,
        type: "ability",
        img: "icons/magic/symbols/runes-star-pentagon-magenta.webp",
        system: {
          abilityType: ability.type || "active",
          sequence: pathway.sequence,
          pathway: pathway.pathway,
          description: `<p><strong>Sequenza ${pathway.sequence} — ${pathway.seqName} (${pathway.pathway})</strong></p><p>${ability.desc}</p>`,
        }
      };

      try {
        await Item.create(itemData, { pack: pack.collection });
        created++;
        if (created % 10 === 0) {
          console.log(`[LotM] Progresso: ${created} abilità create...`);
        }
      } catch (err) {
        console.error(`[LotM] Errore nella creazione di '${ability.name}':`, err);
        errors.push(ability.name);
      }
    }
  }

  // Summary
  const total = PATHWAY_DATA.reduce((sum, p) => sum + p.abilities.length, 0);
  console.log(`[LotM] Completato! ${created}/${total} abilità create. Errori: ${errors.length}`);

  if (errors.length > 0) {
    ui.notifications.warn(`Compendio popolato con errori: ${created} abilità create, ${errors.length} fallite. Controlla la console.`);
    console.warn("[LotM] Abilità fallite:", errors);
  } else {
    ui.notifications.info(`Compendio popolato con successo! ${created} abilità create in ${PATHWAY_DATA.length} percorsi.`);
  }

  // ── Riblocca il compendio dopo la scrittura ──
  await pack.configure({ locked: true });
  console.log("[LotM] Compendio ribloccato.");
}

// Execute the population function
populateCompendium();
