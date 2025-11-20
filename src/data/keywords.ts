export interface Keywords {
  key: string
  desc: string
}

export default [
  {
    key: '+DICE',
    desc: 'Modifier for ACTION rolls. For each +DICE, add one dice to the dice pool of the 2D6 roll you are about to make. +1 DICE thus makes the roll a total of 3D6. Then roll all the dice and pick the two highest. If two +DICE are added, roll 4D6 and pick the two highest, and so on.',
  },
  {
    key: '-DICE',
    desc: 'Modifier for ACTION rolls. For each -DICE, add one dice to the dice pool of the 2D6 roll you are about to make. Thus -1 DICE makes the roll a total of 3D6. Then roll all the dice and pick the two lowest. If two -DICE are added, roll 4D6 and pick the two lowest, and so on.',
  },
  {
    key: 'ACTION',
    desc: 'Covers attacking with Melee and Ranged Weapons, Dashing and any other activity where the player must roll on the Action Success Chart to make an Action. This roll can be modified by the opposing player by using BLOOD MARKERS. Each marker causes -1 DICE penalty to the roll.',
  },
  {
    key: 'ARTIFICIAL',
    desc: 'This model is not of natural origin but is instead constructed from non-organic elements.',
  },
  {
    key: 'ASSAULT',
    desc: 'Ranged attacks made with weapons that have this Keyword do not prevent a model from charging during the same activation. A charge may only be made if a single ranged attack is made with a weapon with this Keyword, regardless of any other rules that the weapon might have.',
  },
  {
    key: 'BLACK GRAIL',
    desc: 'This model is part of the Black Grail faction.',
  },
  {
    key: 'BLAST (X)',
    desc: 'A weapon with BLAST (X) has an area of effect with a radius of inches indicated by X. If this weapon targets a model, this radius is measured from the centre of that model’s base in all directions. If this weapon targets a point on the ground, this radius is measured from that point in all directions, including vertically. If the Attack ACTION with this weapon is successful, it hits every model within this radius that the target (either model or point) has line of sight to (i.e. not completely blocked by terrain).',
  },
  {
    key: 'BLESSING MARKER',
    desc: ' Supernatural or chemical temporary enhancement. Each marker can be converted into +1 DICE for any ACTION the model takes, or into -1 DICE when rolling injuries for this model.',
  },
  {
    key: 'BLOOD MARKER',
    desc: 'Damage inflicted by attacks. Each can be converted into -1 DICE for any ACTION the wounded model takes or into +1 DICE when rolling injuries for this model.',
  },
  {
    key: 'CONSUMABLE',
    desc: 'An item with this keyword can only be used once. After the battle, any items with this keyword that were used are lost.',
  },
  {
    key: 'CRITICAL',
    desc: 'When attacking with a weapon with this keyword, add +2 DICE (instead of 1) to any injury rolls the weapon causes if you roll a Critical (i.e. 12+) on the Action Success Chart.',
  },
  {
    key: 'CUMBERSOME',
    desc: 'When attacking with a weapon with this keyword, add +2 DICE (instead of 1) to any injury rolls the weapon causes if you roll a Critical (i.e. 12+) on the Action Success Chart.',
  },
  {
    key: 'DEMONIC',
    desc: 'The model is supernaturally tainted by Hell and is vulnerable to holy powers.',
  },
  {
    key: 'ELITE',
    desc: 'The most senior and heroic models of the warband. They have different rules for experience and advancement, and often enjoy a different weapon, armour and equipment selection.',
  },
  {
    key: 'FEAR',
    desc: ' Enemies of models with this Keyword suffer -1 DICE in melee combat against this model. Some units are immune to this effect. Models that cause FEAR are not affected by FEAR themselves.',
  },
  {
    key: 'FIRE',
    desc: 'A model hit by a weapon with this Keyword suffers a BLOOD MARKER in addition to any other effects of the attack. The model suffers this BLOOD MARKER even if the attack has no other effects or is otherwise negated. Some equipment or abilities can negate the additional BLOOD MARKER caused by this Keyword.',
  },
  {
    key: 'FIRETEAM',
    desc: 'This model is part of a Fireteam made up of two models. All models that are part of this Fireteam can be activated at the same time without the opponent getting their turn in between. They can take their ACTIONS in any order they wish, switching between the two models. Note that if the activation of either member of the Fireteam forcefully ends (due to a failed RISKY ACTION for example), it ends both Activations. Allies cannot be part of a Fireteam.',
  },
  {
    key: 'GAS',
    desc: 'A model hit by a weapon with this Keyword suffers a BLOOD MARKER, in addition to any other effects of the attack. The model suffers this BLOOD MARKER even if the attack has no other effects or is otherwise negated. Some equipment or abilities can negate the additional BLOOD MARKER caused by this Keyword.',
  },
  {
    key: 'GOLEM',
    desc: 'This model is a Golem, constructed from lost Kabbalistic knowledge – and it is exceedingly hard to destroy. It treats Out of Action injury results as Down unless the attack is made using the Bloodbath rule, in which case an Out of Action result removes the model from play as standard. It does not suffer additional BLOOD MARKERS from weapons with the Keyword GAS and is not affected by the Keyword FEAR. The controlling player cannot remove BLOOD MARKERS from the Golem by any means, though the opponent can use them as standard.',
  },
  {
    key: 'GRENADE',
    desc: 'Grenade-type weapons ignore penalties for cover and long range. They do not count towards the number of ranged weapons a model can carry and do not have to be held in your hand at all times. A model armed with grenades can use them as many times as they wish.',
  },
  {
    key: 'HEAVY',
    desc: 'If carrying a weapon, armour or equipment with this Keyword, the model cannot move/dash and shoot during its Activation, and the model cannot roll D6 and add it to the Charge move. A model can only carry one item with this Keyword.',
  },
  {
    key: 'HERETIC',
    desc: 'The model is a member of the Heretic Legion faction.',
  },
  {
    key: 'INFILTRATOR',
    desc: 'Models with this Keyword can be deployed anywhere on the table out of line of sight of any enemies, but at least 8” away from the closest enemy. They are deployed after all other models without this Keyword. If any infiltrators cannot be deployed according to these restrictions then those models can always be placed in your deployment zone. If a scenario does not allow for infiltrators, deploy models with this Keyword during standard deployment as if they didn’t have this Keyword.',
  },
  {
    key: 'LEADER',
    desc: 'As long as this model is not taken Out of Action, add +1 DICE to any Morale tests the warband has to take.',
  },
  {
    key: 'LIMIT (X)',
    desc: 'You can only purchase as many of this piece of equipment/weapon/armour as indicated by the number in parenthesis for your warband. If you find more via looting/exploration, you can break this limit.',
  },
  {
    key: 'NEW ANTIOCH',
    desc: 'This model is part of the New Antioch faction.',
  },
  {
    key: 'PILGRIM',
    desc: 'This model is part of the Pilgrim faction',
  },
  {
    key: 'RISKY ACTION',
    desc: 'If you fail your roll on the Action Success Chart when taking this ACTION, the Activation of this model ends immediately.',
  },
  {
    key: 'SHRAPNEL',
    desc: 'A model hit by a weapon with this Keyword suffers a BLOOD MARKER, in addition to any other effects of the attack. The model suffers this BLOOD MARKER even if the attack has no other effects or is otherwise negated. Some equipment or abilities can negate the additional BLOOD MARKER caused by this Keyword.',
  },
  {
    key: 'SKIRMISHER',
    desc: 'When a model with this Keyword is targeted by an enemy’s Charge, it may immediately move D3” in any direction, except into Melee Combat. A Skirmisher may also make this move when a charging enemy model would enter Melee Combat with it during a Charge that is not targeting it. After either of these moves is resolved, the Charge continues as normal toward the original target. These moves can only be taken if the Skirmisher is not in Melee Combat and only one such move may be taken per Charge.',
  },
  {
    key: 'STRONG',
    desc: 'A model with this Keyword ignores the rules for weapons/armour/equipment with Keyword HEAVY, including not being limited to carrying only one HEAVY item (though other limitations apply as normal). In addition, it may use a single two-handed Melee weapon as a one-handed weapon.',
  },
  {
    key: 'SULTANATE',
    desc: 'This model is part of the Iron Sultanate faction.',
  },
  {
    key: 'THE COURT',
    desc: 'This model is part of The Court of the Seven Headed Serpent faction.',
  },
  {
    key: 'TOUGH',
    desc: 'If a TOUGH model would be taken Out Of Action, it is knocked Down instead. After a TOUGH model has been knocked Down in this way once, it can be taken Out of Action as normal.',
  },
]
