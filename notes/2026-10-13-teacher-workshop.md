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
