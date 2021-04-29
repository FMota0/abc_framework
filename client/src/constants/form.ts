export const RESEARCH_PROGRAM_TITLE_OPTIONS = {
  required: true,
  minLength: 4,
  maxLength: 20,
};

export const RESEARCH_PROGRAM_TITLE_ERROR = 
  `Tamanho do título deve ser entre ${RESEARCH_PROGRAM_TITLE_OPTIONS.minLength} e ${RESEARCH_PROGRAM_TITLE_OPTIONS.maxLength} caracteres`;

export const RESEARCH_PROGRAM_DESCRIPTION_OPTIONS = {
  required: true,
  minLength: 10,
  maxLength: 100,
};

export const RESEARCH_PROGRAM_DESCRIPTION_ERROR = 
  `Tamanho da descrição deve ser entre ${RESEARCH_PROGRAM_DESCRIPTION_OPTIONS.minLength} e ${RESEARCH_PROGRAM_DESCRIPTION_OPTIONS.maxLength} caracteres`;

export const RESEARCH_TITLE_OPTIONS = {
  required: true,
  minLength: 4,
  maxLength: 30,
};

export const RESEARCH_TITLE_ERROR = 
  `Tamanho do título deve ser entre ${RESEARCH_TITLE_OPTIONS.minLength} e ${RESEARCH_TITLE_OPTIONS.maxLength} caracteres`;

export const RESEARCH_DESCRIPTION_OPTIONS = {
  required: true,
  minLength: 10,
  maxLength: 140,
};

export const RESEARCH_DESCRIPTION_ERROR = 
  `Tamanho da descrição deve ser entre ${RESEARCH_DESCRIPTION_OPTIONS.minLength} e ${RESEARCH_DESCRIPTION_OPTIONS.maxLength} caracteres`;

export const RESEARCH_LINK_OPTIONS = {
  required: true,
  pattern: /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/i,
};

export const RESEARCH_LINK_ERROR = 
  `Link deve ser uma url válida`;
