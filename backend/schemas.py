

from typing import Optional
from pydantic import BaseModel

class test(BaseModel):
    strings: str
    floats: float
    option: Optional[str]