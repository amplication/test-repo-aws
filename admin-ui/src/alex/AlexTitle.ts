import { Alex as TAlex } from "../api/alex/Alex";

export const ALEX_TITLE_FIELD = "id";

export const AlexTitle = (record: TAlex): string => {
  return record.id || record.id;
};
