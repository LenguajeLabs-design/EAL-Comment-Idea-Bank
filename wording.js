'use strict';
(function (root) {
 const sets = {
  unspecified: {label:'Not specified', subject:'', conflicts:[]},
  she: {label:'She / her', subject:'She', conflicts:['he','him','his','himself','they','them','their','theirs','themself','themselves']},
  he: {label:'He / him', subject:'He', conflicts:['she','her','hers','herself','they','them','their','theirs','themself','themselves']},
  they: {label:'They / them', subject:'They', conflicts:['she','her','hers','herself','he','him','his','himself']}
 };
 function agreeWithThey(clause) {
  return clause.replace(/^(\s*)([A-Za-z]+(?:['’][A-Za-z]+)?)/, (all, space, word) => {
   const lower=word.toLowerCase();
   const irregular={is:'are',was:'were',has:'have',does:'do',focuses:'focus',"isn't":"aren't","hasn't":"haven't","doesn't":"don't",'isn’t':'aren’t','hasn’t':'haven’t','doesn’t':'don’t'};
   let next=irregular[lower];
   if(!next){
    if(/[^aeiou]ies$/.test(lower))next=lower.slice(0,-3)+'y';
    else if(/(?:sses|shes|ches|xes|zes|oes)$/.test(lower))next=lower.slice(0,-2);
    else if(/s$/.test(lower)&&!/(?:ss|us)$/.test(lower))next=lower.slice(0,-1);
    else next=lower;
   }
   return space+(word[0]===word[0].toUpperCase()?next[0].toUpperCase()+next.slice(1):next);
  });
 }
 function findConflicts(text, pronouns) {
  const words=new Set((text.match(/\b[A-Za-z]+\b/g)||[]).map(word=>word.toLowerCase()));
  return (sets[pronouns]||sets.unspecified).conflicts.filter(word=>words.has(word));
 }
 const api={sets,agreeWithThey,findConflicts};
 if(typeof module==='object'&&module.exports)module.exports=api;
 else root.EAL_WORDING=api;
})(typeof window==='object'?window:globalThis);
