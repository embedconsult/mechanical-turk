# Teacher workshop session notes: 2026-10-13

> Give students the understanding to read the logic, predict its behavior, and make a machine carry out their intentions, even if AI helped write the code.

This is the central educational goal agreed in the session. Lead with this concrete capability. The phrase discussed with RJ, “Ideas are equal, opportunities are not,” motivates giving everyone the opportunity to learn it.

## Direction to retain

- Keep the workshop focused on AI. Robotics supports the explanation; it is not an additional workshop activity.
- Help teachers feel comfortable understanding AI mechanisms, asking how systems work, and investigating their limits. AI's usefulness can be impressive while hidden biases remain difficult to identify. Empirical success alone does not establish the assurance needed for critical control.
- Emphasize understanding and authorship of instructions, including code initially written with AI assistance. In the robot example, the student can read and explain the instructions that make the robot act on their intentions. The robot becomes their agent through understood, authored instructions. Joystick driving or repeatedly asking AI to fix unexplained code does not by itself establish that capability.

## Reasoning about behavior

Readable, bounded code and explicit contracts can let students reason in advance about behavior within the conditions the system was designed for. State those conditions and assumptions. Tests then check the predictions and implementation against that reasoning.

Repeatability alone is not predictability: seeing the same result repeatedly does not explain why it will occur or establish what happens in other conditions. Avoid suggesting that all software is guaranteed, or that every neural network is categorically incapable of verification.

For a Detroit-relevant car analogy, contrast camera-based recognition with understandable procedural logic for braking or power steering. Use this as a conceptual contrast about reasoning and assurance, not a claim that every real automotive implementation is exclusively procedural.

## Proposed image-learning investigation

Use real candy bars and construction paper to make the data and possible shortcuts tangible.

1. Adapt a pretrained model through transfer learning using a small set of photos.
2. Deliberately introduce a possible confound, such as correlating each candy-bar class with a particular background color.
3. Vary the object and background independently. Ask what participants predict, then investigate both successes and failures.
4. Discuss what the results support, what remains unexplained, and what additional tests would help.

A revealing failure is not guaranteed. Finding one bias does not establish that all other biases have been found. Rehearse the actual model and examples before deciding how to facilitate the activity.

Several small teams using BeagleY-AI are a possible format. Hardware availability, accelerator support, and the practical retraining workflow remain unverified. First rehearse the logistics with one team. A guided laptop demonstration plus a paper fallback is explicitly acceptable.

## Story and earlier activity

Retain the sequence:

- The original Mechanical Turk and its concealed human player.
- Amazon Mechanical Turk as an example of human data work.
- InstructGPT as an example of human demonstrations and rankings influencing a trained system.

Do not imply that OpenAI used Amazon Mechanical Turk. Existing historical and technical references are in the [prototype facilitator notes](../www/spikes/notes.html).

The earlier one-word-at-a-time paper-passing probability activity remains a proposal. Its rules, timing, prompts, and group logistics need rehearsal; the prototype mechanics are not an adopted workshop plan. Use it to discuss how context shapes likely continuations, while acknowledging that people and language models work differently and model tokens are not always whole words.

## Open preparation

- Decide who will be in the first test audience.
- Rehearse one-team logistics and the image-learning examples.
- Verify hardware, software, accelerator compatibility, and retraining time before committing to the multi-team format.
- Rehearse the paper activity and choose the final mechanics.
- Use the rehearsals to decide which activities fit the workshop, retaining the laptop and paper fallback.

## Repository status

These session notes are a standalone record; no slides or prototype assets were edited. The existing `www/spikes` tree is preserved from Git commit `946e1e91901bcbfb6a9fdb0ab6edac2c5ec282c1`.

This GitHub repository is the authorized persistent transfer copy. Import into the [Mechanical Turk Fossil repository](https://ollama.openbeagle.org/mechanical-turk) is still pending; publishing this note here does not update that Fossil remote.

## Later voice-session direction: content, opening, and story

This update records the later discussion and takes precedence where it refines the earlier proposals. It preserves ideas for preparation; it does not automatically add them to the presentation.

### Format and educational purpose

- Both existing presentation frameworks work. Leave the format alone for now and put the effort into content, demonstrations, and participant interactions.
- The longer-term preference is native Fossil Markdown and native diagrams. The spoken word “picture” may have meant Pikchr; that interpretation remains an inference, not a settled tool choice.
- Use image-led slides with few words. Give the speaker visual details that cue the stories, and retain rich speaker notes so someone reading afterward can understand the substance.
- Keep mechanisms, authorship, and reasoning about behavior central. Give students real challenges that require understanding and intentional action, rather than shallow tool use. Retain the exact educational goal at the top of this file, including “even if AI helped write the code.”

### Opening and sequence

- The first five minutes must build the larger context and emotional/intellectual case before any hands-on activity. Build the crescendo; the proposed immediate mini-program jumped ahead. Keep the procedural activity in the next segment.
- Start from the opportunity principle discussed with RJ. Applications and models can leave students unable to explain failures, change or repair a system, or choose an alternative. Make access, control, and dependence tangible: what happens when a useful tool changes its terms, becomes expensive, or disappears?
- Connect the stakes to actual computer science: reading, analyzing, and decomposing exact operations; reasoning before execution under stated assumptions; and verifying the result. Then use a concrete, understandable procedural activity as the basis for comparing later AI examples.
- State the thesis and stakes first; every subsequent example reinforces them; return to the thesis at the close.
- Do not make the concealed-human Mechanical Turk reveal the default opening. Its image and the historical continuity story can find a useful later place.
- Keep the subscription/Doctorow thread brief and focused on incentives, dependence, and the ability to leave a service, rather than a platform diatribe. Do not imply that every third-party tool is restricted. Verify specific commercial examples before using them.
- Big Data and the disadvantages of training at smaller scale remain an explicit economics goal. Proposed compression: omit temperature, retain longer history and training-economics evidence in speaker notes, and give them brief spoken treatment. This is not approval to remove economics. If it needs substantial live coverage, reserve time by shortening another segment.

### Activities and rehearsal decisions

- Develop and rehearse both [the Australian Magician's Dream](https://teachinglondoncomputing.org/wp-content/uploads/2015/05/booklet-the-australian-magicians-dream.pdf) and a paper adaptation of [the Chocolate Turing Machine](https://teachinglondoncomputing.org/turingmachine/), then select one procedural activity. These are accepted candidates for development, not a final activity selection or timing commitment.
- For the word-hat activity, start with a prompt and collect fresh next-word or STOP slips based on the current growing text on each turn. Clear the hat between turns. Randomly draw one; append the selected word to the growing text, or end on STOP. End at a pre-agreed word cap if STOP has not appeared.
- Do two complete generation runs from the same initial prompt, collecting fresh slips on every turn of each run. Do not substitute repeated draws from one unchanged hat or a prewritten sentence.
- Explain the hat as an analogy for generation and sampling, not model training. Human word suggestions are not a trained language model, and model tokens are not always words. Temperature is outside this activity.
- A phone-accessible URL or QR-code version is an optional teacher-toolkit wish. No build is authorized by recording that idea.
- A proposed one-hour allocation is 0–5 minutes for why this matters; 5–17 for the procedural activity; 17–22 for history; 22–32 for the hat; 32–50 for the candy/image-learning investigation; and 50–60 for synthesis. It has no buffer and is not a validated run sheet. Rehearsal must establish feasible timing and preserve the economics discussion.

### Historical story points to retain, with source checks

> The ambition is old; the mechanisms have changed.

This is the story anchor Jason liked. Retain the old ambition and historical continuity without implying that ancient imagined devices, the concealed-human Turk, procedural computers, and modern AI share the same mechanism.

- **Mechanical Turk date:** “Around 1770” is safe workshop wording. The [Computer History Museum](https://www.computerhistory.org/chess/introduction/) gives 1770. [HNF's exhibit page](https://www.hnf.de/en/permanent-exhibition/exhibition-areas/the-mechanization-of-information-technology/early-automatons-miracles-of-technology/wolfgang-von-kempelens-chess-turk.html) gives 1769, while [HNF's 2020 anniversary article](https://blog.hnf.de/250-jahre-schachtuerken/) describes construction in winter 1769/70 and presentation in spring 1770. Preserve this source discrepancy rather than presenting an exact debut date as settled. A concealed human supplied the chess play.
- **Age and generations:** Using the 1770 date, 2026 minus 1770 is 256 years. At an illustrative 25–30 years per generation, that is about 8.5–10.2 generations, loosely “nine or ten.” This is a scale analogy, not a claim about anyone's genealogy.
- **Benjamin Franklin:** The same [museum account](https://www.computerhistory.org/chess/introduction/) lists Franklin among the Turk's opponents. These notes do not establish an exact encounter date, game result, or board position. An illustration of Franklin playing should be labeled an imagined reconstruction unless its provenance documents that particular scene.
- **Aristotle:** In *Politics* I.4, 1253b–1254a, he imagines tools performing their own work, including weaving shuttles and implements playing stringed instruments. He uses the hypothetical in a discussion of household labor and slavery. Cite the [primary text, in H. Rackham's translation](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0058%3Abook%3D1%3Asection%3D1253b). Present it with its ancient slavery context, not as an endorsement of that context or evidence that actual AI existed in antiquity.
- **Turing completeness:** This concerns computational expressiveness: in the idealized model, with unbounded memory and enough time, a universal machine can simulate other Turing machines. It is distinct from the Turing test's question about humanlike performance in an imitation game. Universality does not guarantee practical speed, intelligibility, or advance prediction of all program behavior; general decision procedures have limits. Primary sources: Turing's [1936 paper, sections 6 and 8](https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf), and [1950 paper, sections 1 and 5](https://www.cse.msu.edu/~cse841/papers/Turing.html).

These historical points are saved as story material for later judgment, not a decision to include every point in the deck. The earlier qualifications about reasoning under stated conditions, rehearsal, and hidden bias remain in force.

### Persistence

Only this notes file is updated. Both presentation frameworks and all slides/prototype assets are unchanged. GitHub remains the authorized persistence/import bridge; Fossil is the intended final destination and this update still requires Fossil import.
